import React, { useEffect } from 'react';
import { html, render } from 'lit';


const FlowLineageComponent = () => {
  const nodes = {
    rdj: { fData: { fullName: "Robert Downey Jr.", description: "Movies" } },
    judge: { fData: { fullName: "The Judge", description: "Hank Palmer" } },
    ironman: { fData: { fullName: "Iron Man", description: "Tony Stark" }, fChildren: { irchild1: { fData: { icon: "i-hashtag", title: "Iron Man 1" } }, irchild2: { fData: { icon: "i-paragraph", title: "Iron Man 2" } } }, fHideChildren: false }
  };

  const links = [{ from: "rdj", to: "judge" }, { from: "rdj", to: "ironman" }];

  const nodeTemplate = (node) => html`
    <f-div width="100%" state="secondary" height="100%" padding="small" align="top-left" variant="curved" gap="small">
      <f-pictogram variant="circle" source="${node.fData.fullName}"></f-pictogram>
      <f-div direction="column">
        <f-text size="small" ellipsis>${node.fData.fullName}</f-text>
        <f-text size="x-small" ellipsis>${node.fData.description}</f-text>
      </f-div>
      ${node.childrenToggle}
    </f-div>
  `;

  const childNodeTemplate = (node) => html`
    <f-div state="secondary" width="100%" height="100%" padding="none medium" align="middle-left" gap="small" border="small solid default bottom">
      <f-icon source="${node.fData.icon}" size="small"></f-icon>
      <f-text size="small" ellipsis>${node.fData.title}</f-text>
    </f-div>
  `;

  useEffect(() => {
    const lineageElement = document.querySelector('f-lineage');
    lineageElement.nodes = nodes;
    lineageElement.links = links;
    lineageElement.nodeTemplate = nodeTemplate;
    lineageElement.childrenNodeTemplate = childNodeTemplate;
  }, []);

  return (
    <f-lineage
      direction="horizontal"
      padding={28}
      gap={100}
      nodeSize={{ width: 240, height: 53 }}
      childrenNodeSize={{ width: 240, height: 32 }}
      maxChildrens={8}
      style={{ width: '100%', height: '100vh' }}
    ></f-lineage>
  );
};

export default FlowLineageComponent;
