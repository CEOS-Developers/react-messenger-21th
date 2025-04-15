import styled from 'styled-components';

const ProfileFeatureWrapper = styled.div`
  margin-top: 375px;
  padding: 0 var(--phone-margin);
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureSection = styled.div`
  gap: 35px;
  display: flex;
  justify-content: center;

  div {
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { ProfileFeatureWrapper, MainSection, FeatureSection };
