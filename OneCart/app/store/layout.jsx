import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "OneCart. - Store Dashboard",
    description: "OneCart. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
