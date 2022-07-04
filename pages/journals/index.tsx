import React, { useContext, useState } from 'react';
import AuthGuard from '../../components/auth-guard.component';
import Button from '../../components/button.component';
import FormModal from '../../components/form-modal.component';
import JournalCollection from '../../components/journal-collection.component';

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <AuthGuard>
      <div className='p-5 max-w-screen-xl mx-auto'>
        {/* Add New Entry */}
        <div className='flex justify-end mb-10'>
          <Button onClick={() => setOpen(true)}>
            ADD NEW ENTRY
          </Button>
        </div>

        {/* Journals List */}
        <JournalCollection />

        {/* Form Modal */}
        <FormModal open={open} setOpen={setOpen} />
      </div>
    </AuthGuard>
  )
}
