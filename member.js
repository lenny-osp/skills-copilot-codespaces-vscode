function skillsMember() {
  const member = document.querySelector("#member");
  if (member) {
    const skill = document.querySelector("#member-skill");
    const skillValue = skill.value;
    const skillList = document.querySelector("#member-skill-list");
    const skillArray = skillValue.split(",");
    skillArray.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.classList.add("skill-item");
      skillItem.textContent = skill;
      skillList.appendChild(skillItem);
    });
  }
}