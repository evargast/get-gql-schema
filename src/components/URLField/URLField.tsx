import { Flex, TextField, View } from "@adobe/react-spectrum";
import React, { FC, useState } from "react";

interface URLFieldProps {
    setURL: StateSetter<string>;
}
const URLField: FC<URLFieldProps> = ({ setURL }) => {
    const [url, setUrl] = useState<string>("");

    const onBlur = () => {
        setURL(url);
    };

    return (
        <Flex justifyContent="center">
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                paddingX="size-250"
                width="size-6000"
                marginBottom="size-150"
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    gap="size-150"
                >
                    <h2>Endpoint URL</h2>
                    <TextField
                        value={url}
                        onChange={setUrl}
                        onBlur={onBlur}
                        placeholder="Enter URL here"
                        width="size-3600"
                    />
                </Flex>
            </View>
        </Flex>
    );
};
export default URLField;
