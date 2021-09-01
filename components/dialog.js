import React, { useState, useCallback, Fragment, useRef } from "react";
import { Dialog as HeadlessDialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export const useDialog = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);
  const autoFocusRef = useRef(null);

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  const open = useCallback(() => setState(true), []);
  const close = useCallback(() => setState(false), []);

  return { isOpen: state, open, close, toggle, autoFocusRef };
};

export function Dialog({
  isOpen = false,
  close,
  closeIcon = true,
  overlay = true,
  children,
  ...rest
}) {
  let actions = null;
  let title = null;
  let content = null;
  let description = null;

  children.forEach((child) => {
    if (child.type.name === "DialogActions") {
      actions = child;
    }
    if (child.type.name === "DialogContent") {
      content = child;
    }
    if (child.type.name === "DialogTitle") {
      title = child;
    }
    if (child.type.name === "DialogDescription") {
      description = child;
    }
  });

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <HeadlessDialog
          {...rest}
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={close}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 text-white">
            {overlay && (
              <Transition.Child
                as={Fragment}
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <HeadlessDialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-80 transition-opacity" />
              </Transition.Child>
            )}

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="inline-block align-bottom bg-gray-500 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                <div className="">
                  <div className="w-full flex items-start justify-between">
                    {title && <div className="">{title}</div>}
                    {closeIcon && (
                      <div className="flex-shrink-0 pl-6 ml-auto">
                        <button
                          type="button"
                          className="h-6 w-6 flex items-center justify-center bg-transparent hover:bg-gray-100 rounded focus:ring-2 focus:ring-gray-100 focus:outline-none"
                          onClick={close}
                        >
                          <XIcon className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  {content}
                </div>

                {description && <div className="pt-4 pb-6">{description}</div>}

                {actions && actions}
              </div>
            </Transition.Child>
          </div>
        </HeadlessDialog>
      </Transition.Root>
    </>
  );
}

function DialogContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
Dialog.Content = DialogContent;

function DialogActions({ children }) {
  return <div className="py-8 flex space-x-4">{children}</div>;
}

Dialog.Actions = DialogActions;

function DialogTitle({ as = "h3", children }) {
  return (
    <HeadlessDialog.Title as={as} className="text-lg leading-6 font-medium">
      {children}
    </HeadlessDialog.Title>
  );
}

Dialog.Title = DialogTitle;

function DialogDescription({ as = "p", children }) {
  return (
    <HeadlessDialog.Description as={as} className="">
      {children}
    </HeadlessDialog.Description>
  );
}

Dialog.Description = DialogDescription;
