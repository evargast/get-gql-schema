import { Flex, View } from "@adobe/react-spectrum";
import Toggle from "components/Toggle";
import React, { FC } from "react";

interface SettingsProps {
    hideTypes: boolean;
    setHideTypes: StateSetter<boolean>;
    hideEnums: boolean;
    setHideEnums: StateSetter<boolean>;
}

const Settings: FC<SettingsProps> = ({
    hideTypes,
    setHideTypes,
    hideEnums,
    setHideEnums,
}) => {
    return (
        <Flex justifyContent="center">
            <View
                borderWidth="thin"
                borderColor="dark"
                borderRadius="medium"
                padding="size-250"
                paddingTop="size-0"
                width="100%"
                marginBottom="size-150"
            >
                <h2>Settings</h2>
                <Flex direction="column" gap="size-150">
                    <Toggle
                        labels={{ on: "Hide types", off: "Show types" }}
                        defaultValue={hideTypes}
                        setSelected={setHideTypes}
                    />
                    <Toggle
                        labels={{
                            on: "Minimize Enums",
                            off: "Show full Enums",
                        }}
                        defaultValue={hideEnums}
                        setSelected={setHideEnums}
                    />
                </Flex>
            </View>
        </Flex>
    );
};
export default Settings;
