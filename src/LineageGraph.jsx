import React, { useEffect, useRef, useState } from 'react';
import { html, render } from 'lit-html';
import '@cldcvr/flow-core';
import '@cldcvr/flow-lineage';

const FlowLineageComponent = () => {
  const lineageRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const nodes = {
    rdj: { fData: { fullName: "Robert Downey Jr.", description: "Movies" } },
    judge: { fData: { fullName: "The Judge", description: "Hank Palmer" } },
    ironman: { fData: { fullName: "Iron Man", description: "Tony Stark" }, fChildren: {
      irchild1: { fData: { icon: "i-hashtag", title: "Iron Man 1" } },
      irchild2: { fData: { icon: "i-paragraph", title: "Iron Man 2" } },
      irchild3: { fData: { icon: "i-star", title: "Iron Man 3" } },
      irchild4: { fData: { icon: "i-film", title: "Iron Man 4" } },
      irchild5: { fData: { icon: "i-movie", title: "Iron Man 5" } },
      irchild6: { fData: { icon: "i-camera", title: "Iron Man 6" } },
      irchild7: { fData: { icon: "i-action", title: "Iron Man 7" } },
      irchild8: { fData: { icon: "i-sci-fi", title: "Iron Man 8" } },
      irchild9: { fData: { icon: "i-drama", title: "Iron Man 9" } },
      irchild10: { fData: { icon: "i-thriller", title: "Iron Man 10" } },
    }, fHideChildren: false },
    avengers: { fData: { fullName: "Avengers", description: "Tony Stark/Iron Man" }, fChildren: {
      avchild1: { fData: { icon: "i-hashtag", title: "Avengers 1" } },
      avchild2: { fData: { icon: "i-paragraph", title: "Avengers 2" } },
      avchild3: { fData: { icon: "i-star", title: "Avengers 3" } },
      avchild4: { fData: { icon: "i-film", title: "Avengers 4" } },
      avchild5: { fData: { icon: "i-movie", title: "Avengers 5" } },
      avchild6: { fData: { icon: "i-camera", title: "Avengers 6" } },
      avchild7: { fData: { icon: "i-action", title: "Avengers 7" } },
      avchild8: { fData: { icon: "i-sci-fi", title: "Avengers 8" } },
      avchild9: { fData: { icon: "i-drama", title: "Avengers 9" } },
      avchild10: { fData: { icon: "i-thriller", title: "Avengers 10" } },
    }, fHideChildren: false },
    sherlock: { fData: { fullName: "Sherlock Holmes", description: "Sherlock Holmes" }, fChildren: {
      shchild1: { fData: { icon: "i-hashtag", title: "Sherlock Holmes 1" } },
      shchild2: { fData: { icon: "i-paragraph", title: "Sherlock Holmes 2" } },
      shchild3: { fData: { icon: "i-star", title: "Sherlock Holmes 3" } },
      shchild4: { fData: { icon: "i-film", title: "Sherlock Holmes 4" } },
      shchild5: { fData: { icon: "i-movie", title: "Sherlock Holmes 5" } },
      shchild6: { fData: { icon: "i-camera", title: "Sherlock Holmes 6" } },
      shchild7: { fData: { icon: "i-action", title: "Sherlock Holmes 7" } },
      shchild8: { fData: { icon: "i-sci-fi", title: "Sherlock Holmes 8" } },
      shchild9: { fData: { icon: "i-drama", title: "Sherlock Holmes 9" } },
      shchild10: { fData: { icon: "i-thriller", title: "Sherlock Holmes 10" } },
    }, fHideChildren: false },
    tropicthunder: { fData: { fullName: "Tropic Thunder", description: "Kirk Lazarus" }, fChildren: {
      ttchild1: { fData: { icon: "i-hashtag", title: "Tropic Thunder 1" } },
      ttchild2: { fData: { icon: "i-paragraph", title: "Tropic Thunder 2" } },
    }, fHideChildren: false },
    spiderman: { fData: { fullName: "Spider-Man", description: "Tony Stark" }, fChildren: {
      spchild1: { fData: { icon: "i-hashtag", title: "Spider-Man 1" } },
      spchild2: { fData: { icon: "i-paragraph", title: "Spider-Man 2" } },
    }, fHideChildren: false },
    chaplin: { fData: { fullName: "Chaplin", description: "Charlie Chaplin" }, fChildren: {
      chchild1: { fData: { icon: "i-hashtag", title: "Chaplin 1" } },
      chchild2: { fData: { icon: "i-paragraph", title: "Chaplin 2" } },
    }, fHideChildren: false },
    gothika: { fData: { fullName: "Gothika", description: "Pete Graham" }, fChildren: {
      gochild1: { fData: { icon: "i-hashtag", title: "Gothika 1" } },
      gochild2: { fData: { icon: "i-paragraph", title: "Gothika 2" } },
    }, fHideChildren: false },
    zodiac: { fData: { fullName: "Zodiac", description: "Paul Avery" }, fChildren: {
      zochild1: { fData: { icon: "i-hashtag", title: "Zodiac 1" } },
      zochild2: { fData: { icon: "i-paragraph", title: "Zodiac 2" } },
    }, fHideChildren: false },
    solaris: { fData: { fullName: "Solaris", description: "Chris Kelvin" }, fChildren: {
      sochild1: { fData: { icon: "i-hashtag", title: "Solaris 1" } },
      sochild2: { fData: { icon: "i-paragraph", title: "Solaris 2" } },
    }, fHideChildren: false },
    kisskissbangbang: { fData: { fullName: "Kiss Kiss Bang Bang", description: "Harry Lockhart" }, fChildren: {
      kkchild1: { fData: { icon: "i-hashtag", title: "Kiss Kiss Bang Bang 1" } },
      kkchild2: { fData: { icon: "i-paragraph", title: "Kiss Kiss Bang Bang 2" } },
    }, fHideChildren: false },
  };

  const links = [
    { from: "rdj", to: "judge" },
    { from: "rdj", to: "ironman" },
    { from: "rdj", to: "avengers" },
    { from: "rdj", to: "sherlock" },
    { from: "rdj", to: "tropicthunder" },
    { from: "rdj", to: "spiderman" },
    { from: "rdj", to: "chaplin" },
    { from: "rdj", to: "gothika" },
    { from: "rdj", to: "zodiac" },
    { from: "rdj", to: "solaris" },
    { from: "rdj", to: "kisskissbangbang" },
    { from: "ironman", to: "avengers" },
    { from: "ironman", to: "spiderman" },
    { from: "avchild1", to: "spchild1" },
    { from: "shchild1", to: "zochild1" },
    { from: "shchild2", to: "sochild1" },
    { from: "spchild1", to: "kkchild1" },
    { from: "kkchild2", to: "sochild2" },
  ];

  const nodeTemplate = (node) => html`
    <f-div width="100%" state="secondary" height="100%" padding="small" align="top-left" variant="curved" gap="small" class="custom-node" @click=${() => setSelectedNode(node)}>
      <f-pictogram variant="circle" source="${node.fData.fullName}"></f-pictogram>
      <f-div direction="column">
        <f-text size="small" ellipsis>${node.fData.fullName}</f-text>
        <f-text size="x-small" ellipsis>${node.fData.description}</f-text>
      </f-div>
      ${node.childrenToggle}
    </f-div>
  `;

  const childNodeTemplate = (node) => html`
    <f-div state="secondary" width="100%" height="100%" padding="none medium" align="middle-left" gap="small" border="small solid default bottom" background="red" class="custom-child-node">
      <f-icon source="${node.fData.icon}" size="small"></f-icon>
      <f-text size="small" ellipsis>${node.fData.title}</f-text>
    </f-div>
  `;

  useEffect(() => {
    const lineageElement = lineageRef.current;
    if (lineageElement) {
      lineageElement.nodes = nodes;
      lineageElement.links = links;
      lineageElement.nodeTemplate = nodeTemplate;
      lineageElement.childrenNodeTemplate = childNodeTemplate;
    }
  }, []);

  return (
    <div>
      <f-lineage
        ref={lineageRef}
        direction="horizontal"
        padding={28}
        gap={100}
        nodeSize={{ width: 240, height: 53 }}
        childrenNodeSize={{ width: 240, height: 32 }}
        maxChildrens={8}
        style={{ width: '100%', height: '100vh', overflow: 'auto' }}
        class="custom-lineage"
      ></f-lineage>
      {selectedNode && (
        <div className="modal" onClick={() => setSelectedNode(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedNode.fData.fullName}</h2>
            <p>{selectedNode.fData.description}</p>
            <button onClick={() => setSelectedNode(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowLineageComponent;
