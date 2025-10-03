"use client";

import CourseCard from "./CourseCard";

export default function CoursesSection() {
  const handleNotify = async () => {
    // This will be implemented later with email notification system
    alert("Thank you for your interest! We'll notify you when this course is available.");
  };

  const handlePurchase = (courseTitle: string) => {
    // This will be implemented later with Stripe integration
    alert(`Redirecting to checkout for ${courseTitle}...`);
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">My Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What I&apos;m <span className="gradient-text">Offering</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mentorship Program - First (Full Width) */}
          <div className="md:col-span-2">
            <CourseCard
              badge="Available Now"
              badgeColor="accent"
              title="Mentorship Program"
              description="Personal guidance for junior and middle business analysts. One-on-one sessions, career advice, and practical skills development."
              features={["1-on-1 Sessions", "Career Growth"]}
              available={true}
              isAccented={true}
              onPurchase={() => handlePurchase("Mentorship Program")}
              details={{
                curriculum: [
                  "Personalized learning path assessment",
                  "Resume and portfolio review",
                  "Interview preparation",
                  "Real-world problem solving",
                  "Career planning and goal setting",
                  "Industry insights and networking",
                ],
                outcomes: [
                  "Accelerate your career growth",
                  "Build confidence in your BA skills",
                  "Navigate career transitions",
                  "Develop a professional network",
                  "Receive personalized feedback",
                ],
                prerequisites: [
                  "Junior or Middle-level BA position",
                  "Commitment to regular sessions",
                  "Willingness to learn and grow",
                ],
                materials: [
                  "Session recordings (optional)",
                  "Personalized action plans",
                  "Resource recommendations",
                  "Templates and frameworks",
                  "Access to exclusive BA community",
                ],
                format: [
                  "Monthly 1-hour video calls",
                  "Email support between sessions",
                  "Flexible scheduling",
                  "3, 6, or 12-month programs available",
                  "Group workshop access (optional add-on)",
                ],
              }}
            />
          </div>

          {/* Course 1 */}
          <CourseCard
            badge="Coming Soon"
            badgeColor="primary"
            title="Course Title One"
            description="Master the fundamentals and advanced techniques in this comprehensive course."
            price={99}
            features={["10+ Lessons", "Video Content"]}
            available={false}
            onNotify={handleNotify}
            details={{
              curriculum: [
                "Introduction to Business Analysis",
                "Requirements Gathering Techniques",
                "Stakeholder Management",
                "Documentation Best Practices",
                "Process Modeling",
                "Data Analysis Fundamentals",
                "Agile BA Practices",
                "Communication Skills for BAs",
                "Project Planning and Estimation",
                "Final Project and Case Study",
              ],
              outcomes: [
                "Understand core business analysis principles",
                "Effectively gather and document requirements",
                "Create professional business analysis artifacts",
                "Communicate effectively with stakeholders",
              ],
              prerequisites: ["Basic understanding of business processes"],
              materials: [
                "Video lessons (HD quality)",
                "PDF workbooks and templates",
                "Practice exercises",
                "Case study materials",
                "Downloadable resource library",
              ],
              format: [
                "Self-paced online course",
                "Lifetime access to materials",
                "Certificate of completion",
              ],
            }}
          />

          {/* Course 2 */}
          <CourseCard
            badge="Coming Soon"
            badgeColor="secondary"
            title="Course Title Two"
            description="Take your skills to the next level with hands-on projects and expert guidance."
            price={149}
            features={["15+ Lessons", "Projects Included"]}
            available={false}
            onNotify={handleNotify}
            details={{
              curriculum: [
                "Advanced Requirements Engineering",
                "Business Process Reengineering",
                "Data Modeling and Analytics",
                "System Integration Analysis",
                "Risk Management for BAs",
                "Advanced Stakeholder Techniques",
                "Vendor Selection and Management",
                "Change Management",
                "Business Case Development",
                "Portfolio and Program Analysis",
                "Industry-specific Applications",
                "Real-world Project Work",
                "Capstone Project",
              ],
              outcomes: [
                "Master advanced business analysis techniques",
                "Lead complex projects and initiatives",
                "Develop comprehensive business cases",
                "Apply industry best practices",
                "Build a professional portfolio",
              ],
              prerequisites: [
                "Completion of Course One or equivalent experience",
                "6+ months of BA experience recommended",
              ],
              materials: [
                "Advanced video lessons",
                "Real-world case studies",
                "Project templates and frameworks",
                "Industry tools and software guides",
                "Expert interview recordings",
                "Comprehensive resource archive",
              ],
              format: [
                "Self-paced with suggested timeline",
                "Hands-on projects",
                "Lifetime access and updates",
                "Professional certificate",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
}
