import { Meta } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { UiWiWidget } from "~/UiWiWidget";
import { QuizState } from "~/store/RTKstore";
import { MockStory } from "~/components/Quiz/Storybook/MockStore";
import { Template } from "~/components/Quiz/Storybook/Template";

export function createMockedUiWiWidget(title: string) {
    return {
        title,
        component: UiWiWidget,
        decorators: [withMock]
    } as Meta<typeof UiWiWidget>;
}

export function createTemplate(mockBase: QuizState, mockData: object, index = 0) {
    const template = Template.bind({});

    template.decorators = [
        (story) => {
            return MockStory(story, {
                ...mockBase,
                currentIndex: index
            });
        }
    ];

    template.parameters = {
        mockData
    };

    return template;
}
