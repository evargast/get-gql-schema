import { Content, Heading, IllustratedMessage } from "@adobe/react-spectrum";
import Unavailable from "@spectrum-icons/illustrations/Unavailable";
import React, { FC } from "react";

const ErrorMessage: FC = () => {
    return (
        <>
            <IllustratedMessage height="50%">
                <Unavailable />
                <Heading>Error 503: Service unavailable</Heading>
                <Content>
                    There seems to be an issue with the endpoint. Try a
                    different one or try again later.
                </Content>
            </IllustratedMessage>
        </>
    );
};
export default ErrorMessage;
