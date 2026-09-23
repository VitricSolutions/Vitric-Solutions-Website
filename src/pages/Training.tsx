import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TrainingHero from "../components/Training/TrainingHero";
import WhyTraining from "../components/Training/WhyTraining";
import ProgramObjectives from "../components/Training/ProgramObjectives";
import CurriculumOverview from "../components/Training/CurriculumOverview";
import TrainingHighlights from "../components/Training/TrainingHighlights";
import TrainingLogistics from "../components/Training/TrainingLogistics";
import TrainingFooter from "../components/Training/TrainingFooter";

const Training = () => {
    return (
        <div className="w-full relative bg-white overflow-x-hidden">
            <Header />

            <main>
                <TrainingHero />
                <WhyTraining />
                <ProgramObjectives />
                <CurriculumOverview />
                <TrainingHighlights />
                <TrainingLogistics />
                <TrainingFooter />
            </main>

            <Footer />
        </div>
    );
};

export default Training;
