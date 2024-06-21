import ActionSlide from "./ActionSlide/ActionSlide";
import ErrorSlide from "./ErrorSlide/ErrorSlide";
import NewsSlide from "./NewsSlide/NewsSlide";
import ProjectSlide from "./ProjectSlide/ProjectSlide";
import SlideBase from "./SlideBase/SlideBase";
import TitleSlide from "./TitleSlide/TitleSlide";

export const Templates = Object.freeze({
    'default': SlideBase,
    'title': TitleSlide,
    'action': ActionSlide,
    'error': ErrorSlide,
    'news': NewsSlide,
    'project': ProjectSlide
});