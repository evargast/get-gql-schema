import { Grid, TextField, View } from "@adobe/react-spectrum";
import BackAndroid from "@spectrum-icons/workflow/BackAndroid";
import React, { FC, useState } from "react";

interface KeyValueProps {
    setJSON: StateSetter<JSONObject>;
}

const KeyValue: FC<KeyValueProps> = ({ setJSON }) => {
    const [key, setKey] = useState<string>("");
    const [value, setValue] = useState<string>("");

    const onBlur = () => {
        if (key !== "") {
            const newJSON: JSONObject = {};
            newJSON[key] = value;

            setJSON(newJSON);
        }
    };

    return (
        <View paddingBottom="size-150">
            <Grid
                columns={["1fr", "size-300", "1fr"]}
                rows={["1fr"]}
                gap="size-150"
            >
                <TextField
                    label="Key"
                    value={key}
                    onChange={setKey}
                    onBlur={onBlur}
                    placeholder="Enter key here"
                />
                <View
                    alignSelf="end"
                    UNSAFE_style={{
                        transform: "scale(-1, 1)",
                    }}
                >
                    <BackAndroid />
                </View>
                <TextField
                    label="Value"
                    value={value}
                    onChange={setValue}
                    onBlur={onBlur}
                    placeholder="Enter value here"
                />
            </Grid>
        </View>
    );
};
export default KeyValue;
