import React, { useState } from 'react';

export default function ReadMore() {
    const [isExpanded, setIsExpanded] = useState(false);
    const text = "Occaecat incididunt exercitation sint irure quis velit in occaecat esse duis ut.";

  return (
    <div>
         {isExpanded ? (
            <div>
            {text}
                <button onClick={() => setIsExpanded(false)}>Read less</button>
            </div>
        ) : (
            <div>
            {text.substring(0, 20)}
             <button onClick={() => setIsExpanded(true)}>Read more</button>
            </div>
        )}
    </div>
  )
}
