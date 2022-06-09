export function showWinnerModal(fighter) {
  const imageElement = createFighterImage(fighter);
  const modalElement = {
    title: `${fighter.name} won!`,
    bodyElement: imageElement,
    onClose: () => {
      location.reload();
    }
  };

  showModal(modalElement);
}
