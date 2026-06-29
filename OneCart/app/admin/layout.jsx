import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "OneCart. - Admin",
    description: "OneCart. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
