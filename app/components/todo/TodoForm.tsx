import { useState } from "react";
import ClickButton from "@/app/components/ClickButton";
import Input from "@/app/components/Input";
import TagsInput from "@/app/components/tag/TagsInput";

interface TodoFormProps {
    onSaveTodo: (value: string, tags: string[]) => void;
    autoCompleteTags: string[];
}

const TodoForm = ({
    onSaveTodo,
    autoCompleteTags = []
}: TodoFormProps) => {
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [tagInputValue, setTagInputValue] = useState('');

    const addClickHandler = () => {
        onSaveTodo(inputValue, tags);
        setInputValue("");
        setTags([]);
    }

    const handleTagInputChange = (value: string) => {
        setTagInputValue(value);
    }

    const handleTagInputSubmit = () => {
        if (tagInputValue.trim() !== "") {
            setTags([...tags, tagInputValue.trim()]);
            setTagInputValue("");
        }
    }

    return (
        <div>
            <Input
                value={inputValue}
                onChange={setInputValue}
                placeholder="Enter Todo..." />

            <TagsInput
                value={tagInputValue}
                onChange={handleTagInputChange}
                onSubmit={handleTagInputSubmit}
                autoCompleteTags={autoCompleteTags}
                placeholder="Enter Tags..." />

            <ClickButton
                label="Add"
                onClick={addClickHandler}
                disabled={!inputValue} />
        </div>
    );
}

export default TodoForm;
