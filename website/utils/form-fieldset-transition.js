export function fieldsetTransition(target_fieldset = null, active_class = `active`) {
    if(target_fieldset == null) {
        return null;
    }
    document.querySelectorAll(`[fieldset]`).forEach(el => {
        el.classList.remove(active_class)
    })
    document.querySelectorAll(`[fieldset="${target_fieldset}"]`).forEach(el => {
        el.classList.add(active_class)
    })
}