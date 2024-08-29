// AccordionComponent.tsx

import React, { useEffect } from 'react';
import { Accordion } from 'flowbite';
import type { AccordionItem, AccordionOptions } from 'flowbite';
import { AccordionItemProps } from '@/types/AccordionItemProps';

interface AccordionComponentProps {
    items: AccordionItemProps[];
    options?: AccordionOptions;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ items, options }) => {
    
    useEffect(() => {
        const accordionItems: AccordionItem[] = items.map(item => ({
            id: item.id,
            triggerEl: document.querySelector(`#${item.id}`) as HTMLElement,
            targetEl: document.querySelector(`#${item.id}-body`) as HTMLElement,
            active: item.isActive || false,
        }));

        const accordionEl = document.querySelector('#accordion-example') as HTMLElement;

        const mergedOptions: AccordionOptions = {
            ...options,
            alwaysOpen: false, // Garante que apenas um item esteja aberto por vez
        };

        const accordion = new Accordion(accordionEl, accordionItems, mergedOptions);

        return () => {
            accordion.destroy();
        };
    }, [items, options]);

    return (
        <div id="accordion-example">
            {items.map((item, index) => (
                <div key={item.id}>
                    <h2 id={item.id}>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            aria-expanded={item.isActive || false}
                            aria-controls={`${item.id}-body`}
                        >
                            <span>{item.title}</span>
                            <svg
                                data-accordion-icon
                                className="w-6 h-6 rotate-180 shrink-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </h2>
                    <div 
                        id={`${item.id}-body`} 
                        className={`p-5 border border-t-0 ${
                            index !== items.length - 1 ? 'border-b-0' : ''
                        } border-gray-200 dark:border-gray-700 dark:bg-gray-900`} 
                        
                        aria-labelledby={item.id}
                    >
                        {typeof item.content === 'string' ? <p className="mb-2 text-gray-500 dark:text-gray-400">{item.content}</p> : item.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordionComponent;
