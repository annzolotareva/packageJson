import { render } from "./render";

export const changePermissions = () => {
    console.log('remove');
    const tbody = document.getElementById("table-body");
    tbody.addEventListener("click", (e) => {
        if (e.target.closest('input[type=checkbox]')) {
            const tr = e.target.closest('tr');
            const input = tr.querySelector('input[type=checkbox]');
            const id = tr.dataset.key;
            
            userService.changeUser(id, {permissions: input.checked}).then(res => {
                 userService.getUsers().then(users => {
                render(users);
            });
            });
        }
    });
};