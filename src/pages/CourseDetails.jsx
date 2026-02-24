import { useParams } from "react-router-dom";
import { trendingCourses } from "../components/trendingCourses";

const CourseDetails = () => {
  const { id } = useParams();

  const course = trendingCourses
    .flatMap(cat => cat.courses)
    .find(c => c.id == id);

  if (!course) {
    return <h1 className="p-6 text-xl">Course not found 😞</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.org}</p>

      <img src={course.img} className="w-60 rounded-lg mb-4" alt="" />

      <p className="text-gray-700 text-lg">{course.meta}</p>
    </div>
  );
};

export default CourseDetails;