import AddDomain from "@/components/dashboard/AddDomain";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center  justify-center">
        <div className="flex items-center space-x-2">
          <AddDomain />
        </div>
      </div>
    </div>
  );
}
