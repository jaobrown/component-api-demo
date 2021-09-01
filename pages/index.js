import { useRef } from "react";
import { Dialog, useDialog } from "../components/dialog";

export default function Home() {
  const {
    isOpen,
    // open,
    // close,
    toggle,
    autoFocusRef,
  } = useDialog();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-600">
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan text-base font-medium text-gray-600 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan sm:text-sm"
        onClick={toggle}
      >
        Open Modal
      </button>
      <Dialog
        initialFocus={autoFocusRef}
        isOpen={isOpen}
        close={toggle}
        title="Add Account to your ccount of assets and debts"
      >
        <Dialog.Title>Add Asset</Dialog.Title>
        <Dialog.Content>
          <div className="mt-2 space-y-4">
            {[1, 2, 3].map((_, idx) => (
              <label className="block" key={idx}>
                <div className="text-white-200 text-sm">Label</div>
                <input
                  ref={idx === 0 ? autoFocusRef : null}
                  className="w-full"
                  placeholder="Placeholder..."
                  className="text-white placeholder-white-400 w-full bg-gray-200 rounded p-2"
                />
              </label>
            ))}
          </div>
        </Dialog.Content>
        <Dialog.Description>
          Removing the Business Account will remove all related transactions and
          historical data. This will likely impact other views such as your net
          worth dashboard.
        </Dialog.Description>
        <Dialog.Actions>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan text-base font-medium text-gray-600 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan sm:text-sm"
            onClick={toggle}
          >
            Go back to dashboard
          </button>
        </Dialog.Actions>
      </Dialog>
    </div>
  );
}
