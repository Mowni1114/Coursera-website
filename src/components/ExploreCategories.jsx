import {
  Briefcase,
  Sparkles,
  TrendingUp,
  Code,
  Monitor,
  Rocket,
  HeartPulse,
  Globe,
  Users,
  Palette,
  FlaskConical,
  Calculator,
} from "lucide-react";

const categories = [
  { name: "Business", icon: Briefcase },
  { name: "Artificial Intelligence", icon: Sparkles },
  { name: "Data Science", icon: TrendingUp },
  { name: "Computer Science", icon: Code },
  { name: "Information Technology", icon: Monitor },
  { name: "Personal Development", icon: Rocket },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Language Learning", icon: Globe },
  { name: "Social Sciences", icon: Users },
  { name: "Arts and Humanities", icon: Palette },
  { name: "Physical Science and Engineering", icon: FlaskConical },
  { name: "Math and Logic", icon: Calculator },
];

const ExploreCategories = () => {
  return (
    <div className=" w-full pt-32">
  <div className="lg:container lg:mx-auto px-2">
    <p className="text-2xl   font-semibold mb-6">
      Explore categories 
    </p>


        <div className="flex flex-wrap gap-3 ">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
   <button
  key={index}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    height: "40px",
    padding: "0 24px",
    backgroundColor: "#e3eeff",
    borderRadius: "9999px",
    fontSize: "14px",
    fontWeight: "500",
    whiteSpace: "nowrap",
    border: "none",
    cursor: "pointer",
  }}
>
  <Icon size={16} />
  {cat.name}
</button>



            );
          })}
        </div>
      </div>
    </div>
  );
};


export default ExploreCategories;
