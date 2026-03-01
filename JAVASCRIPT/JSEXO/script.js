

    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(response => response.json())
        .then(data => {
            // 1. Propriété SquadName
            console.log("Nom de l'équipe :", data.squadName);

            // 2. Nombre de membres
            console.log("Nombre de membres :", data.members.length);

            // 3. Nom de chaque membre
            console.log("Noms des membres :");
            data.members.forEach(member => {
                console.log("-", member.name);
            });

            // 4. Liste des pouvoirs du 1er membre
            console.log("Pouvoirs du 1er membre :", data.members[0].powers);

            // 5. Liste des pouvoirs de Molecule Man
            data.members.forEach(member => {
                if (member.name === "Molecule Man") {
                    console.log("Pouvoirs de Molecule Man :", member.powers);
                }
            });

            // 6. Nom des membres ayant le pouvoir "Radiation Resistance"
            console.log("Membres avec 'Radiation Resistance' :");
            data.members.forEach(member => {
                if (member.powers.includes("Radiation Resistance")) {
                    console.log("-", member.name);
                }
            });

            // 7. Nom et âge du plus jeune membre
            let youngest = data.members[0];
            data.members.forEach(member => {
                if (member.age < youngest.age) {
                    youngest = member;
                }
            });
            console.log(`Le plus jeune membre est ${youngest.name} avec ${youngest.age} ans.`);
        })
