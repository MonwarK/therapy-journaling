import { Dispatch, EventHandler, Fragment, SetStateAction, useContext, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from './button.component';
import { JournalContext } from "../context/journal.context";

type Props = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function FormModal({ open, setOpen } : Props) {
  const [title, setTitle] = useState("");
  const [negativeThoughts, setNegativeThoughts] = useState("");
  const [cognitiveError, setCognitiveError] = useState("");
  const [rationalAlternative, setRationalAlternative] = useState("");

  const cancelButtonRef = useRef(null);
  const journalContext = useContext(JournalContext);

  const handleSubmit: any = (e:Event) => {
    e.preventDefault();
    if(!negativeThoughts || !cognitiveError || !rationalAlternative) return;
    journalContext?.addNewEntry(title, negativeThoughts, cognitiveError, rationalAlternative);
    setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white p-8 sm:p-4">
                  <h2 className='text-2xl mb-5 text-center uppercase font-medium'>Add New Entry</h2>

                  <form onSubmit={handleSubmit} className='space-y-5'>
                  <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        What negative thoughts did you have today?
                      </label>
                      <div className="mt-1">
                        <textarea
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          value={negativeThoughts}
                          onChange={(e) => setNegativeThoughts(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        What type of cognitive error is these beliefs?
                      </label>
                      <div className="mt-1">
                        <textarea
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          value={cognitiveError}
                          onChange={(e) => setCognitiveError(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        What is a more rational alternative to these thoughts?
                      </label>
                      <div className="mt-1">
                        <textarea
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          value={rationalAlternative}
                          onChange={(e) => setRationalAlternative(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button style={{ width: '100%' }}>
                      ADD ENTRY
                    </Button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
