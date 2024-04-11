"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({
    currentPage,
    totalPages,
}: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const renderPaginationItems = () => {
        const paginationItems = [];

        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                paginationItems.push(renderPageButton(i));
            }
        } else {
            let startPage = Math.max(
                1,
                currentPage - Math.floor(maxPagesToShow / 2)
            );
            let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

            if (endPage - startPage < maxPagesToShow - 1) {
                startPage = Math.max(1, endPage - maxPagesToShow + 1);
            }

            if (startPage > 1) {
                paginationItems.push(renderEllipsis(0));
            }

            for (let i = startPage; i <= endPage; i++) {
                paginationItems.push(renderPageButton(i));
            }

            if (endPage < totalPages) {
                paginationItems.push(renderEllipsis(1));
            }
        }

        return paginationItems;
    };

    const renderPageButton = (pageNumber: number) => (
        <Link
            key={`page-${pageNumber}`}
            href={createPageURL(pageNumber)}
            className={`${
                pageNumber === currentPage
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black"
            } font-medium px-4 py-2 mx-1 rounded-md transition-colors duration-300`}
        >
            {pageNumber}
        </Link>
    );

    const renderEllipsis = (key: number) => (
        <span key={key} className="font-medium px-4 py-2 mx-1 text-white">
            ...
        </span>
    );

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    return (
        <div className="flex justify-center mt-8">
            {currentPage > 1 && (
                <Link
                    href={createPageURL(currentPage - 1)}
                    className="bg-primary text-white font-medium px-4 py-2 mx-1 rounded-md transition-colors duration-300"
                >
                    Previous
                </Link>
            )}
            {renderPaginationItems()}
            {currentPage < totalPages && (
                <Link
                    href={createPageURL(currentPage + 1)}
                    className="bg-primary text-white font-medium px-4 py-2 mx-1 rounded-md transition-colors duration-300"
                >
                    Next
                </Link>
            )}
        </div>
    );
}
