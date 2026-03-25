import React, { useMemo, useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  GraduationCap,
  ClipboardList,
  BadgeCheck,
  CreditCard,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronDown,
  Plus,
  Download,
  Eye,
  Pencil,
  Trash2,
  Filter,
  Upload,
  Menu,
  X,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const stats = [
  { label: "Total Learners", value: "18,420", change: "+12.4%", icon: Users },
  { label: "Total Instructors", value: "324", change: "+4.1%", icon: GraduationCap },
  { label: "Total Courses", value: "1,286", change: "+8.9%", icon: BookOpen },
  { label: "Total Enrollments", value: "42,860", change: "+16.3%", icon: ClipboardList },
  { label: "Total Revenue", value: "₹12.8L", change: "+19.7%", icon: CreditCard },
];

const enrollmentChart = [
  { month: "Jan", enrollments: 3200 },
  { month: "Feb", enrollments: 4100 },
  { month: "Mar", enrollments: 3900 },
  { month: "Apr", enrollments: 5200 },
  { month: "May", enrollments: 4800 },
  { month: "Jun", enrollments: 6100 },
];

const revenueChart = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 168000 },
  { month: "Mar", revenue: 149000 },
  { month: "Apr", revenue: 210000 },
  { month: "May", revenue: 196000 },
  { month: "Jun", revenue: 248000 },
];

const categoryData = [
  { name: "Development", value: 38 },
  { name: "Business", value: 24 },
  { name: "Design", value: 18 },
  { name: "Marketing", value: 20 },
];

const pieColors = ["#4f46e5", "#7c3aed", "#60a5fa", "#a78bfa"];

const topCourses = [
  { id: 1, title: "React Masterclass", learners: 4200, rating: 4.8, thumb: "RM" },
  { id: 2, title: "UI/UX Foundations", learners: 3100, rating: 4.7, thumb: "UX" },
  { id: 3, title: "Python for Beginners", learners: 5200, rating: 4.9, thumb: "PY" },
  { id: 4, title: "Digital Marketing Pro", learners: 2800, rating: 4.6, thumb: "DM" },
];

const coursesSeed = [
  { id: 108, category: "Development", subCategory: "Frontend", courseName: "React for Beginners", level: "Beginner", price: 1499, instructor: "Arun Kumar", enrollments: 420, status: "Active" },
  { id: 107, category: "Business", subCategory: "Finance", courseName: "Business Analytics", level: "Intermediate", price: 1999, instructor: "Priya Sharma", enrollments: 310, status: "Active" },
  { id: 106, category: "Design", subCategory: "UI/UX", courseName: "UI UX Design Fundamentals", level: "Beginner", price: 1299, instructor: "Sneha Reddy", enrollments: 365, status: "Active" },
  { id: 105, category: "Development", subCategory: "Backend", courseName: "Django Full Stack Bootcamp", level: "Intermediate", price: 2299, instructor: "Karthik S", enrollments: 198, status: "Inactive" },
  { id: 104, category: "Data Science", subCategory: "Machine Learning", courseName: "Machine Learning Essentials", level: "Advanced", price: 2499, instructor: "Rahul Verma", enrollments: 275, status: "Active" },
  { id: 103, category: "Marketing", subCategory: "SEO", courseName: "SEO Growth Strategy", level: "Intermediate", price: 1699, instructor: "Meena Das", enrollments: 254, status: "Active" },
  { id: 102, category: "Development", subCategory: "JavaScript", courseName: "Advanced JavaScript", level: "Advanced", price: 2199, instructor: "Vignesh B", enrollments: 167, status: "Inactive" },
  { id: 101, category: "Personal Development", subCategory: "Communication", courseName: "English for Interviews", level: "Beginner", price: 999, instructor: "Anitha Rao", enrollments: 520, status: "Active" },
];

const mentorsSeed = [
  { id: 4, name: "Arun Kumar", email: "arun@edu.com", courses: 12, rating: 4.8, status: "Active" },
  { id: 3, name: "Priya Sharma", email: "priya@edu.com", courses: 9, rating: 4.7, status: "Active" },
  { id: 2, name: "Sneha Reddy", email: "sneha@edu.com", courses: 7, rating: 4.6, status: "Inactive" },
  { id: 1, name: "Rahul Verma", email: "rahul@edu.com", courses: 15, rating: 4.9, status: "Active" },
];

const learnersSeed = [
  { id: 4, name: "Mowni", email: "mowni@gmail.com", enrolled: 4, status: "Active" },
  { id: 3, name: "Keerthi", email: "keerthi@gmail.com", enrolled: 2, status: "Active" },
  { id: 2, name: "Nivetha", email: "nivetha@gmail.com", enrolled: 6, status: "Inactive" },
  { id: 1, name: "Harini", email: "harini@gmail.com", enrolled: 3, status: "Active" },
];

const enrollmentSeed = [
  { id: "ENR-4108", user: "Mowni", course: "React for Beginners", instructor: "Arun Kumar", price: 1499, date: "2026-03-22", status: "Completed" },
  { id: "ENR-4107", user: "Keerthi", course: "UI UX Design Fundamentals", instructor: "Sneha Reddy", price: 1299, date: "2026-03-21", status: "Pending" },
  { id: "ENR-4106", user: "Nivetha", course: "Business Analytics", instructor: "Priya Sharma", price: 1999, date: "2026-03-19", status: "Completed" },
  { id: "ENR-4105", user: "Harini", course: "English for Interviews", instructor: "Anitha Rao", price: 999, date: "2026-03-18", status: "Cancelled" },
];

const paymentsSeed = [
  { id: "TXN-9008", user: "Mowni", course: "React for Beginners", amount: 1499, mode: "UPI", status: "Success", date: "2026-03-22" },
  { id: "TXN-9007", user: "Keerthi", course: "UI UX Design Fundamentals", amount: 1299, mode: "Card", status: "Success", date: "2026-03-21" },
  { id: "TXN-9006", user: "Nivetha", course: "Business Analytics", amount: 1999, mode: "Net Banking", status: "Pending", date: "2026-03-19" },
  { id: "TXN-9005", user: "Harini", course: "English for Interviews", amount: 999, mode: "UPI", status: "Failed", date: "2026-03-18" },
];

const navItems = [
  { key: "Dashboard", icon: LayoutDashboard },
  { key: "Courses", icon: BookOpen },
  { key: "Mentors", icon: GraduationCap },
  { key: "Learners", icon: Users },
  { key: "Enrollments", icon: ClipboardList },
  { key: "Certificates", icon: BadgeCheck },
  { key: "Payments", icon: CreditCard },
  { key: "Settings", icon: Settings },
];

const statusClass = {
  Active: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  Inactive: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
  Completed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
  Cancelled: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
  Success: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  Failed: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
};

function PanelCard({ title, children, action }) {
  return (
    <div className="w-full min-w-0 rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-5 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

function MetricCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="mt-2 truncate text-2xl font-bold text-slate-900 sm:text-3xl">{item.value}</p>
          <span className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
            {item.change}
          </span>
        </div>
        <div className="shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 p-3 text-white shadow-lg">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

function Toolbar({ title, buttonText = "Add New", onAdd, search, setSearch, extra }) {
  return (
    <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">Manage and organize your platform data.</p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative w-full min-w-0 lg:w-[280px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-400"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {extra}
          <button
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-md"
            onClick={onAdd}
          >
            <Plus size={18} />
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

function DataTable({ columns, data, selected, setSelected, page, setPage, recordsPerPage = 5 }) {
  const totalPages = Math.max(1, Math.ceil(data.length / recordsPerPage));
  const safePage = Math.min(page, totalPages);
  const paginated = data.slice((safePage - 1) * recordsPerPage, safePage * recordsPerPage);
  const allSelected = paginated.length > 0 && paginated.every((row) => selected.includes(row.id));

  const toggleAll = () => {
    if (allSelected) {
      setSelected(selected.filter((id) => !paginated.some((r) => r.id === id)));
    } else {
      setSelected([...new Set([...selected, ...paginated.map((r) => r.id)])]);
    }
  };

  const toggleRow = (id) => {
    setSelected(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="px-4 py-4 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="h-4 w-4 rounded border-slate-300"
                />
              </th>
              {columns.map((col) => (
                <th key={col.key} className="whitespace-nowrap px-4 py-4 text-left font-semibold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {paginated.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/80">
                <td className="px-4 py-4 align-top">
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                </td>

                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-4 align-top text-slate-700">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}

            {paginated.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-10 text-center text-slate-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Showing {paginated.length} of {data.length} records
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
          >
            Prev
          </button>

          <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            Page {safePage} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function FormInput({ placeholder, type = "text", defaultValue }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400"
    />
  );
}

function FormSelect({ options = ["Select"] }) {
  return (
    <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-400">
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded-xl p-2 text-indigo-600 hover:bg-indigo-50">
        <Eye size={16} />
      </button>
      <button className="rounded-xl p-2 text-amber-600 hover:bg-amber-50">
        <Pencil size={16} />
      </button>
      <button className="rounded-xl p-2 text-rose-600 hover:bg-rose-50">
        <Trash2 size={16} />
      </button>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-5">
        {stats.map((item) => (
          <MetricCard key={item.label} item={item} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
        <div className="min-w-0 2xl:col-span-2">
          <PanelCard title="Monthly Enrollments">
            <div className="h-72 w-full min-w-0 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enrollmentChart}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="enrollments" fill="#4f46e5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </PanelCard>
        </div>

        <div className="min-w-0">
          <PanelCard title="Category Performance">
            <div className="h-72 w-full min-w-0 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={categoryData} innerRadius={55} outerRadius={95} paddingAngle={3} dataKey="value">
                    {categoryData.map((entry, index) => (
                      <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </PanelCard>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
        <div className="min-w-0 2xl:col-span-2">
          <PanelCard title="Revenue Trends">
            <div className="h-72 w-full min-w-0 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueChart}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#7c3aed" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </PanelCard>
        </div>

        <div className="min-w-0">
          <PanelCard
            title="Top Courses"
            action={<button className="text-sm font-medium text-indigo-600">View all</button>}
          >
            <div className="space-y-4">
              {topCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 p-3 transition hover:bg-slate-50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 font-semibold text-white">
                    {course.thumb}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold text-slate-900">{course.title}</p>
                    <p className="text-sm text-slate-500">
                      {course.learners} learners • ⭐ {course.rating}
                    </p>
                  </div>
                  <button className="rounded-xl border border-slate-200 p-2 text-slate-600">
                    <Eye size={16} />
                  </button>
                </div>
              ))}
            </div>
          </PanelCard>
        </div>
      </div>
    </div>
  );
}

function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const filtered = useMemo(() => {
    return [...coursesSeed]
      .sort((a, b) => b.id - a.id)
      .filter((item) =>
        [item.category, item.subCategory, item.courseName, item.instructor, item.level]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
  }, [search]);

  const columns = [
    { key: "category", label: "Category" },
    { key: "subCategory", label: "Sub-category" },
    { key: "courseName", label: "Course Name", render: (v) => <span className="font-semibold text-slate-900">{v}</span> },
    { key: "level", label: "Level", render: (v) => <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">{v}</span> },
    { key: "price", label: "Price", render: (v) => `₹${v}` },
    { key: "instructor", label: "Instructor" },
    { key: "enrollments", label: "Enrollment Count" },
    { key: "status", label: "Status", render: (v) => <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass[v]}`}>{v}</span> },
    { key: "actions", label: "Actions", render: () => <ActionButtons /> },
  ];

  return (
    <div>
      <Toolbar
        title="Courses"
        buttonText="Add Course"
        onAdd={() => setShowForm(!showForm)}
        search={search}
        setSearch={setSearch}
        extra={
          <>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              <Filter size={16} />
              Filter
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
              <Download size={16} />
              Export
            </button>
          </>
        }
      />

      {showForm && (
        <div className="mb-6 rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="mb-5 text-lg font-semibold text-slate-900">Add Course</h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <FormInput placeholder="Title" />
            <FormSelect options={["Category", "Development", "Business", "Design"]} />
            <FormSelect options={["Level", "Beginner", "Intermediate", "Advanced"]} />
            <FormInput placeholder="Short Description" />
            <FormSelect options={["Language", "English", "Tamil", "Hindi"]} />
            <FormInput placeholder="Duration" />
            <FormInput placeholder="Price" />
            <FormSelect options={["Instructor", "Arun Kumar", "Priya Sharma", "Sneha Reddy"]} />
            <FormSelect options={["Status", "Active", "Inactive"]} />
          </div>

          <textarea
            className="mt-4 min-h-[130px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400"
            placeholder="Full Description"
          />

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-slate-600">
              <Upload size={18} /> Upload Course Image
              <input type="file" className="hidden" />
            </label>
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-slate-600">
              <Upload size={18} /> Upload Intro Video
              <input type="file" className="hidden" />
            </label>
          </div>

          <button className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-semibold text-white shadow-md">
            Submit Course
          </button>
        </div>
      )}

      <DataTable
        columns={columns}
        data={filtered}
        selected={selected}
        setSelected={setSelected}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

function MentorsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const data = useMemo(() => {
    return [...mentorsSeed]
      .sort((a, b) => b.id - a.id)
      .filter((item) => `${item.name} ${item.email}`.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const columns = [
    {
      key: "name",
      label: "Name",
      render: (v) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            {v[0]}
          </div>
          <span className="font-semibold text-slate-900">{v}</span>
        </div>
      ),
    },
    { key: "email", label: "Email" },
    { key: "courses", label: "Courses Count" },
    { key: "rating", label: "Rating", render: (v) => `⭐ ${v}` },
    { key: "status", label: "Status", render: (v) => <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass[v]}`}>{v}</span> },
    { key: "actions", label: "Actions", render: () => <ActionButtons /> },
  ];

  return (
    <div>
      <Toolbar
        title="Mentors"
        buttonText="Add Mentor"
        onAdd={() => {}}
        search={search}
        setSearch={setSearch}
        extra={
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
            <Download size={16} />
            Export
          </button>
        }
      />

      <div className="mb-6 rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="mb-5 text-lg font-semibold text-slate-900">Mentor Form</h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {["Name", "Email", "Qualification", "Specialization", "Experience"].map((item) => (
            <FormInput key={item} placeholder={item} />
          ))}
          <FormSelect options={["Status", "Active", "Inactive"]} />
        </div>

        <textarea
          className="mt-4 min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400"
          placeholder="Bio"
        />

        <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-slate-600">
          <Upload size={18} /> Upload Profile Image
          <input type="file" className="hidden" />
        </label>
      </div>

      <DataTable
        columns={columns}
        data={data}
        selected={selected}
        setSelected={setSelected}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

function LearnersPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const data = useMemo(() => {
    return [...learnersSeed]
      .sort((a, b) => b.id - a.id)
      .filter((item) => `${item.name} ${item.email}`.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const columns = [
    {
      key: "name",
      label: "Name",
      render: (v) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
            {v[0]}
          </div>
          <span className="font-semibold text-slate-900">{v}</span>
        </div>
      ),
    },
    { key: "email", label: "Email" },
    { key: "enrolled", label: "Enrolled Courses" },
    { key: "status", label: "Active Status", render: (v) => <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass[v]}`}>{v}</span> },
    { key: "actions", label: "Actions", render: () => <ActionButtons /> },
  ];

  return (
    <div>
      <Toolbar
        title="Learners"
        buttonText="Add Learner"
        onAdd={() => {}}
        search={search}
        setSearch={setSearch}
        extra={
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
            <Download size={16} />
            Export
          </button>
        }
      />

      <DataTable
        columns={columns}
        data={data}
        selected={selected}
        setSelected={setSelected}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

function EnrollmentsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const data = useMemo(() => {
    return [...enrollmentSeed]
      .sort((a, b) => (a.id < b.id ? 1 : -1))
      .filter((item) => `${item.id} ${item.user} ${item.course}`.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const columns = [
    { key: "id", label: "Enrollment ID", render: (v) => <span className="font-semibold text-slate-900">{v}</span> },
    { key: "user", label: "User Name" },
    { key: "course", label: "Course Name" },
    { key: "instructor", label: "Instructor" },
    { key: "price", label: "Price", render: (v) => `₹${v}` },
    { key: "date", label: "Date" },
    { key: "status", label: "Status", render: (v) => <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass[v]}`}>{v}</span> },
    { key: "actions", label: "Actions", render: () => <ActionButtons /> },
  ];

  return (
    <div>
      <Toolbar
        title="Enrollments"
        buttonText="Add Enrollment"
        onAdd={() => {}}
        search={search}
        setSearch={setSearch}
        extra={
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
            <Download size={16} />
            Export
          </button>
        }
      />

      <DataTable
        columns={columns}
        data={data}
        selected={selected}
        setSelected={setSelected}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

function CertificatesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <Toolbar
        title="Certificates"
        buttonText="Generate Certificate"
        onAdd={() => {}}
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <PanelCard
          title="Certificate Preview"
          action={
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
              Download PDF
            </button>
          }
        >
          <div className="rounded-3xl border border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6 text-center sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-indigo-600 sm:text-sm">
              Certificate of Completion
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">Mowni</h2>
            <p className="mt-3 text-slate-600">has successfully completed</p>
            <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">React for Beginners</p>
            <p className="mt-6 text-sm text-slate-500">Issued on March 23, 2026</p>
          </div>
        </PanelCard>

        <PanelCard title="Certificate Actions">
          <div className="space-y-4">
            <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-semibold text-white">
              Generate Certificate
            </button>
            <button className="w-full rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700">
              View Certificate Preview
            </button>
            <button className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 font-semibold text-rose-700">
              Revoke Certificate
            </button>
            <button className="w-full rounded-2xl border border-slate-200 px-5 py-3 font-semibold text-slate-700">
              Download PDF
            </button>
          </div>
        </PanelCard>
      </div>
    </div>
  );
}

function PaymentsPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const data = useMemo(() => {
    return [...paymentsSeed]
      .sort((a, b) => (a.id < b.id ? 1 : -1))
      .filter((item) => `${item.id} ${item.user} ${item.course}`.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const columns = [
    { key: "id", label: "Transaction ID", render: (v) => <span className="font-semibold text-slate-900">{v}</span> },
    { key: "user", label: "User" },
    { key: "course", label: "Course" },
    { key: "amount", label: "Amount", render: (v) => `₹${v}` },
    { key: "mode", label: "Mode" },
    { key: "status", label: "Status", render: (v) => <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass[v]}`}>{v}</span> },
    { key: "date", label: "Date" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <MetricCard item={{ label: "Total Revenue", value: "₹12.8L", change: "+19.7%", icon: CreditCard }} />
        <MetricCard item={{ label: "Successful Payments", value: "1,824", change: "+8.3%", icon: BadgeCheck }} />
        <MetricCard item={{ label: "Refund Requests", value: "26", change: "+1.1%", icon: ClipboardList }} />
      </div>

      <Toolbar
        title="Payments"
        buttonText="Export Payments"
        onAdd={() => {}}
        search={search}
        setSearch={setSearch}
        extra={
          <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
            <Download size={16} />
            Export
          </button>
        }
      />

      <DataTable
        columns={columns}
        data={data}
        selected={selected}
        setSelected={setSelected}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <PanelCard title="Platform Settings">
        <div className="space-y-4">
          <FormInput placeholder="Platform Name" defaultValue="Coursera Admin" />
          <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-slate-600">
            <Upload size={18} /> Upload Logo
            <input type="file" className="hidden" />
          </label>
          <FormInput placeholder="Contact Email" defaultValue="admin@coursera.com" />
          <FormInput placeholder="Phone Number" defaultValue="+91 9876543210" />
        </div>
      </PanelCard>

      <PanelCard title="SMTP Email Settings">
        <div className="space-y-4">
          <FormInput placeholder="SMTP Host" />
          <FormInput placeholder="SMTP Port" />
          <FormInput placeholder="SMTP Username" />
          <FormInput placeholder="SMTP Password" type="password" />
        </div>
      </PanelCard>

      <PanelCard title="Payment Gateway Keys">
        <div className="space-y-4">
          <FormInput placeholder="Razorpay Key" />
          <FormInput placeholder="Stripe Publishable Key" />
          <FormInput placeholder="Stripe Secret Key" type="password" />
        </div>
      </PanelCard>

      <PanelCard title="Terms, Privacy & Social Links">
        <div className="space-y-4">
          <textarea className="min-h-[110px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400" placeholder="Terms & Conditions" />
          <textarea className="min-h-[110px] w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400" placeholder="Privacy Policy" />
          <FormInput placeholder="LinkedIn URL" />
          <FormInput placeholder="Instagram URL" />
          <FormInput placeholder="YouTube URL" />
        </div>
      </PanelCard>

      <div className="xl:col-span-2">
        <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md sm:w-auto">
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  const renderPage = () => {
    switch (active) {
      case "Dashboard":
        return <DashboardPage />;
      case "Courses":
        return <CoursesPage />;
      case "Mentors":
        return <MentorsPage />;
      case "Learners":
        return <LearnersPage />;
      case "Enrollments":
        return <EnrollmentsPage />;
      case "Certificates":
        return <CertificatesPage />;
      case "Payments":
        return <PaymentsPage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-[1px] lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-slate-200 bg-white p-5 shadow-xl transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <p className="text-lg font-bold text-slate-900">Menu</p>
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-xl border border-slate-200 p-2 text-slate-600"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex items-center gap-3 rounded-[28px] bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-4 text-white shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 font-bold">
              C
            </div>
            <div>
              <p className="text-lg font-bold">Coursera Admin</p>
              <p className="text-xs text-indigo-100">E-learning control panel</p>
            </div>
          </div>

          <nav className="mt-6 flex-1 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setActive(item.key);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.key}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-6 border-t border-slate-200 pt-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-rose-600 hover:bg-rose-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex min-w-0 items-center gap-3">
                <button
                  className="rounded-2xl border border-slate-200 p-2 text-slate-700 lg:hidden"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <Menu size={20} />
                </button>

                <div className="relative hidden w-[280px] sm:block lg:w-[340px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none focus:border-indigo-400"
                    placeholder="Search courses, learners, mentors..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="relative rounded-2xl border border-slate-200 p-3 text-slate-700">
                  <Bell size={18} />
                  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                </button>

                <button className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 font-semibold text-white">
                    A
                  </div>
                  <div className="hidden text-left sm:block">
                    <p className="text-sm font-semibold text-slate-900">Admin</p>
                    <p className="text-xs text-slate-500">Super Admin</p>
                  </div>
                  <ChevronDown size={16} className="hidden text-slate-500 sm:block" />
                </button>
              </div>
            </div>
          </header>

          <main className="p-4 sm:p-6 lg:p-8">{renderPage()}</main>
        </div>
      </div>
    </div>
  );
}