import { SurveyCreatorComponent, SurveyCreator, editorLocalization } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const translations = editorLocalization.getLocale("");

translations.pe.logo = "Form Logo";
translations.pe.survey = {
    title: "Form title",
    description: "Form description"
};

translations.pe.surveyTitlePlaceholder = "Form title";
translations.pe.tabs.logo = "Form Logo";

translations.ed.testSurveyAgain = "Test Form Again";

const creatorOptions = {
  isAutoSave: true,
  showJSONEditorTab: false,
  pageEditMode: "single" as const,
  questionTypes: ["text", "checkbox", "radiogroup", "dropdown"],
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}