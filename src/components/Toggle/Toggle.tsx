import { Flex, ToggleButton } from "@adobe/react-spectrum";
import React, { FC } from "react";

interface ToggleProps {
    labels: { on: string; off: string };
    defaultValue: boolean;
    setSelected: StateSetter<boolean>;
}
const Toggle: FC<ToggleProps> = ({ labels, defaultValue, setSelected }) => {
    return (
        <Flex direction="row" justifyContent="center">
            <ToggleButton
                isSelected={defaultValue}
                isEmphasized={defaultValue}
                onPress={() => {
                    if (!defaultValue) {
                        setSelected(true);
                    }
                }}
            >
                {labels.on}
            </ToggleButton>
            <ToggleButton
                isSelected={!defaultValue}
                isEmphasized={!defaultValue}
                onPress={() => {
                    if (defaultValue) {
                        setSelected(false);
                    }
                }}
            >
                {labels.off}
            </ToggleButton>
        </Flex>
    );
};
export default Toggle;
