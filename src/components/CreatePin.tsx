import React from 'react';
import {User} from "../constants/types";

interface CreatePinProps {
    user: User
}

const CreatePin: React.FC<CreatePinProps> = ({user}) => {
    return (
        <div>
            CreatePin
        </div>
    );
};

export default CreatePin;
