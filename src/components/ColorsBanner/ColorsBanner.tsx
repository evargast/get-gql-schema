import { Flex, View } from "@adobe/react-spectrum";
import React, { ComponentProps, FC } from "react";

const ColorsBanner: FC = () => {
    const baseColors = [
        "celery",
        "chartreuse",
        "yellow",
        "magenta",
        "fuchsia",
        "purple",
        "indigo",
        "seafoam",
        "red",
        "orange",
        "green",
        "blue",
    ];

    type BackgroundColor = ComponentProps<typeof View>["backgroundColor"];
    const colors: BackgroundColor[] = [];
    for (const color of baseColors) {
        for (let i = 4; i <= 5; i++) {
            colors.push(`${color}-${i}00` as BackgroundColor);
        }
    }
    return (
        <Flex
            justifyContent="space-between"
            wrap="wrap"
            gap="size-100"
            marginTop="size-300"
            marginBottom="size-400"
        >
            {colors.map(color => (
                <View
                    key={color}
                    height="size-75"
                    width="size-75"
                    backgroundColor={color}
                />
            ))}
        </Flex>
    );
};
export default ColorsBanner;
