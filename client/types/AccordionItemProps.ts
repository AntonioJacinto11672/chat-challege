// types.ts
export interface AccordionItemProps {
    id: string;
    title: string;
    content: string | React.ReactNode;
    isActive?: boolean;
}