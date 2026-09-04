document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

    try {
        const response = await fetch("https://steep-term-5062.k-kovalskyi93.workers.dev", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                comment
            })
        });

        const result = await response.json();

        if (result.success) {
            alert("Заявка успішно відправлена. Чекайте на дзвінок від 4HOME");
            document.getElementById("contact-form").reset();
        } else {
            alert("Помилка при відправленні заявки.");
        }

    } catch (error) {
        console.error(error);
        alert("Не вдалося зв'язатися із сервером.");
    }
});
