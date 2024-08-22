import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

const ResizableDiv = () => {
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [isResizing, setIsResizing] = useState(false);

  const divRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = e.clientX - divRef.current.getBoundingClientRect().left;
      const newHeight = e.clientY - divRef.current.getBoundingClientRect().top;
      setSize({
        width: newWidth > 100 ? newWidth : 100,
        height: newHeight > 100 ? newHeight : 100,
      });
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <div
      ref={divRef}
      style={{
        width: size.width,
        height: size.height,
        border: '1px solid black',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'gray',
          position: 'absolute',
          right: 0,
          bottom: 0,
          cursor: 'se-resize',
        }}
      ></div>
    </div>
  );
};

const CanvasWithDragAndDrop = () => {
  return (
    <div style={{ width: '100%', height: '100vh', border: '2px solid black', position: 'relative' }}>
      <Draggable>
        <ResizableDiv />
      </Draggable>
    </div>
  );
};

export default CanvasWithDragAndDrop;