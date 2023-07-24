const committeesData = [
  // Add committee data objects here, based on your research
  {
    name: "Committee 1",
    description: "Description of Committee 1",
    // Add other information as needed (e.g., topics, chairpersons, etc.)
  },
  {
    name: "Committee 2",
    description: "Description of Committee 2",
  },
  // Add more committee data objects as required
];

function createCommitteeCards() {
  const committeesSection = document.getElementById("committees");
  committeesData.forEach(committee => {
    const committeeCard = document.createElement("div");
    committeeCard.classList.add("committee-card");

    const committeeName = document.createElement("div");
    committeeName.classList.add("committee-name");
    committeeName.textContent = committee.name;

    const committeeDescription = document.createElement("div");
    committeeDescription.classList.add("committee-description");
    committeeDescription.textContent = committee.description;

    committeeCard.appendChild(committeeName);
    committeeCard.appendChild(committeeDescription);

    committeesSection.appendChild(committeeCard);
  });
}

createCommitteeCards();