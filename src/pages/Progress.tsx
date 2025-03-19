
import ProgressTracking from "@/components/ProgressTracking";

const ProgressPage = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Learning Progress</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Track your sign language learning journey with detailed insights and analytics on your progress.
        </p>
      </div>
      
      <ProgressTracking />
    </div>
  );
};

export default ProgressPage;
