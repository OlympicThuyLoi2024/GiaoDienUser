export default {
    navigateBasedOnRole: () => {
        let targetAppURL = '';
                targetAppURL = `http://14.225.218.213:8080/app/admin/sign-in-674b2a581cc72f1a54257910?branch=main`
        navigateTo(targetAppURL, 'SAME_WINDOW');
    }
}
