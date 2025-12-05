import { type FC, useState } from "react";
import styled from "styled-components";

type SingleWorkoutProps = {
  title: string;
  description: string;
  series: string;
  mediaUrl?: string;
  mediaType?: "video" | "image";
};

export const SingleWorkout: FC<SingleWorkoutProps> = ({
  title,
  description,
  series,
  mediaUrl,
  mediaType = "video",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => mediaUrl && setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ListItem>
        <SeriesLabel>{series}</SeriesLabel>

        <div>
          <TitleRow>
            <strong>{title}</strong>
          </TitleRow>

          <p>{description}</p>
        </div>

        {mediaUrl && (
          <MediaButton type="button" aria-label={`Guarda come eseguire ${title}`} onClick={openModal}>
            👁️
          </MediaButton>
        )}
      </ListItem>

      {isModalOpen && mediaUrl && (
        <ModalBackdrop onClick={closeModal} id="modal-backdrop">
          <ModalCard onClick={(event) => event.stopPropagation()}>
            <ModalHeader>
              <span>Esecuzione</span>
              <CloseButton type="button" aria-label="Chiudi modale" onClick={closeModal}>
                ×
              </CloseButton>
            </ModalHeader>
            {mediaType === "image" ? (
              <MediaImage src={mediaUrl} alt={`Esecuzione di ${title}`} />
            ) : (
              <MediaVideo controls src={mediaUrl} loop>
                Il tuo browser non supporta il video.
              </MediaVideo>
            )}
          </ModalCard>
        </ModalBackdrop>
      )}
    </>
  );
};

export const ListItem = styled.li({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  padding: "10px 12px",
  borderRadius: "12px",
  background: "rgba(241, 242, 247, 0.92)",
  border: "1px solid rgba(15, 18, 36, 0.08)",

  p: {
    margin: 0,
  },
});

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const SeriesLabel = styled.span`
  background: var(--lime-100);
  position: absolute;
  right: 12px;
  top: -12px;
  padding: 3px 6px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 12px;
`;

const MediaButton = styled.button`
  border: 1px solid rgba(15, 18, 36, 0.12);
  background: rgba(15, 18, 36, 0.06);
  color: inherit;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, transform 0.1s ease;

  &:hover {
    background: rgba(15, 18, 36, 0.12);
    border-color: rgba(15, 18, 36, 0.2);
    transform: translateY(-1px);
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 50;
`;

const ModalCard = styled.div`
  background: #fff;
  color: #0f1224;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  display: grid;
  gap: 12px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  color: inherit;
`;

const MediaVideo = styled.video`
  width: auto;
  border-radius: 10px;
  background: #0f1224;
  height: calc(100vh - 200px);
`;

const MediaImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: contain;
`;
