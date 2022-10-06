import React from 'react';

interface FormActionProps {
    handleSubmit: React.FormEventHandler<HTMLButtonElement>;
    type: string | undefined;
    action: 'submit' | 'reset' | 'button' | undefined;
    text: string;
}

const FormAction: React.FC<FormActionProps> = ({
                                                   handleSubmit,
                                                   type = 'Button',
                                                   action = 'submit',
                                                   text
                                               }) => {
        return (
            <>
                {
                    type === 'Button' ?
                        <button
                            type={action}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm text-black font-medium rounded-md text-black bg-slate-50 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                            onSubmit={handleSubmit}
                        >

                            {text}
                        </button>
                        :
                        <></>
                }
            </>
        )
    }
;

export default FormAction;
