import {cmdPrompt} from "./cmdPrompt";
import wxChmod from "./wxChmod";
import {exposeCompileShortcut} from "./exposeShortcut";

export const execute = async function () {
    const path = await cmdPrompt();
    try {
        await wxChmod(path);
        const isSuccess = await exposeCompileShortcut(path) as any;
        if (isSuccess) {
            console.log(`添加全局编译热键成功， 热键为ctrl+alt+shift+f10`);
        }
    } catch (err) {
        console.log(err);
    }
};