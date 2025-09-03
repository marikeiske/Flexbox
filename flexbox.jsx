import React, { useState } from 'react';

const FlexboxDemoApp = () => {
  const [flexWrap, setFlexWrap] = useState(true);
  const [showGrowExample, setShowGrowExample] = useState(false);
  const [showShrinkExample, setShowShrinkExample] = useState(false);

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '2rem 1rem',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
          📱 Flexbox Demo App
        </h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9 }}>
          Explore React Native Layout Properties
        </p>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '1rem',
      }}>

        {/* Flex Wrap Section */}
        <div style={{
          backgroundColor: 'white',
          margin: '1rem 0',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
        }}>
          <h2 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1.25rem' }}>
            1. flex-wrap 🔄
          </h2>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 0',
            borderBottom: '1px solid #e2e8f0',
            marginBottom: '1rem',
          }}>
            <label style={{ fontSize: '1rem', color: '#374151', fontWeight: '500' }}>
              Enable Flex Wrap
            </label>
            <label style={{ position: 'relative', display: 'inline-block', width: '60px', height: '34px' }}>
              <input
                type="checkbox"
                checked={flexWrap}
                onChange={(e) => setFlexWrap(e.target.checked)}
                style={{ opacity: 0, width: 0, height: 0 }}
              />
              <span style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: flexWrap ? '#3b82f6' : '#cbd5e1',
                transition: '0.4s',
                borderRadius: '34px',
              }}>
                <span style={{
                  position: 'absolute',
                  content: '""',
                  height: '26px',
                  width: '26px',
                  left: flexWrap ? '30px' : '4px',
                  bottom: '4px',
                  backgroundColor: 'white',
                  transition: '0.4s',
                  borderRadius: '50%',
                }} />
              </span>
            </label>
          </div>
          
          <div style={{
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            padding: '1rem',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: flexWrap ? 'wrap' : 'nowrap',
          }}>
            {[1, 2, 3, 4, 5, 6].map(num => (
              <div key={num} style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem',
                margin: '0.25rem',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 'bold',
                minWidth: '80px',
                fontSize: '0.875rem',
              }}>
                Item {num}
              </div>
            ))}
          </div>
          
          <div style={{
            backgroundColor: '#1e293b',
            color: '#e2e8f0',
            padding: '0.75rem',
            borderRadius: '6px',
            marginTop: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
          }}>
            flexWrap: '{flexWrap ? 'wrap' : 'nowrap'}'
          </div>
        </div>

        {/* Flex Grow Section */}
        <div style={{
          backgroundColor: 'white',
          margin: '1rem 0',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
        }}>
          <h2 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1.25rem' }}>
            2. flex-grow 📈
          </h2>
          
          <button
            onClick={() => setShowGrowExample(!showGrowExample)}
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              transition: 'all 0.2s',
            }}
          >
            {showGrowExample ? '👁️ Hide' : '👀 Show'} Grow Example
          </button>
          
          {showGrowExample && (
            <>
              <div style={{
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'row',
                minHeight: '80px',
              }}>
                <div style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '1rem',
                  margin: '0.25rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  flex: '0',
                }}>
                  Fixed
                </div>
                <div style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '1rem',
                  margin: '0.25rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  flex: '1',
                }}>
                  Grow 1
                </div>
                <div style={{
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  padding: '1rem',
                  margin: '0.25rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  flex: '2',
                }}>
                  Grow 2
                </div>
              </div>
              
              <div style={{
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                padding: '0.75rem',
                borderRadius: '6px',
                marginTop: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                whiteSpace: 'pre-line',
              }}>
                {`Item 1: flex: 0
Item 2: flex: 1
Item 3: flex: 2`}
              </div>
            </>
          )}
        </div>

        {/* Flex Shrink Section */}
        <div style={{
          backgroundColor: 'white',
          margin: '1rem 0',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
        }}>
          <h2 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1.25rem' }}>
            3. flex-shrink 📉
          </h2>
          
          <button
            onClick={() => setShowShrinkExample(!showShrinkExample)}
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              transition: 'all 0.2s',
            }}
          >
            {showShrinkExample ? '👁️ Hide' : '👀 Show'} Shrink Example
          </button>
          
          {showShrinkExample && (
            <>
              <div style={{
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'row',
                minHeight: '80px',
                maxWidth: '350px',
              }}>
                <div style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '0.75rem',
                  margin: '0.25rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  flexShrink: 0,
                  minWidth: '70px',
                }}>
                  No Shrink
                </div>
                <div style={{
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '0.75rem',
                  margin: '0.25rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  flexShrink: 1,
                  minWidth: '70px',
                }}>
                  Shrink 1
                </div>
                <div style={{
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  padding: '0.75rem',
                  margin: '0.25rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  flexShrink: 3,
                  minWidth: '70px',
                }}>
                  Shrink 3
                </div>
              </div>
              
              <div style={{
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                padding: '0.75rem',
                borderRadius: '6px',
                marginTop: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                whiteSpace: 'pre-line',
              }}>
                {`Item 1: flexShrink: 0
Item 2: flexShrink: 1
Item 3: flexShrink: 3`}
              </div>
            </>
          )}
        </div>

        {/* Flex Basis Section */}
        <div style={{
          backgroundColor: 'white',
          margin: '1rem 0',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
        }}>
          <h2 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1.25rem' }}>
            4. flex-basis 📏
          </h2>
          
          <div style={{
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            minHeight: '80px',
          }}>
            <div style={{
              backgroundColor: '#8b5cf6',
              color: 'white',
              padding: '1rem',
              margin: '0.25rem',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              flexBasis: '100px',
            }}>
              Basis 100
            </div>
            <div style={{
              backgroundColor: '#ec4899',
              color: 'white',
              padding: '1rem',
              margin: '0.25rem',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              flexBasis: '150px',
            }}>
              Basis 150
            </div>
            <div style={{
              backgroundColor: '#06b6d4',
              color: 'white',
              padding: '1rem',
              margin: '0.25rem',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              flexBasis: '200px',
            }}>
              Basis 200
            </div>
          </div>
          
          <div style={{
            backgroundColor: '#1e293b',
            color: '#e2e8f0',
            padding: '0.75rem',
            borderRadius: '6px',
            marginTop: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            whiteSpace: 'pre-line',
          }}>
            {`Item 1: flexBasis: 100px
Item 2: flexBasis: 150px
Item 3: flexBasis: 200px`}
          </div>
        </div>

        {/* Combined Example */}
        <div style={{
          backgroundColor: 'white',
          margin: '1rem 0',
          borderRadius: '16px',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0',
        }}>
          <h2 style={{ margin: '0 0 1rem 0', color: '#1e293b', fontSize: '1.25rem' }}>
            5. Combined Example 🎨
          </h2>
          <p style={{ margin: '0 0 1rem 0', color: '#6b7280' }}>
            Responsive card layout using all properties
          </p>
          
          <div style={{
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}>
            {[
              { title: 'Card 1', basis: '45%', color: '#ef4444' },
              { title: 'Card 2', basis: '45%', color: '#10b981' },
              { title: 'Full Width Card', basis: '100%', color: '#3b82f6' },
              { title: 'Card 4', basis: '30%', color: '#f59e0b' },
              { title: 'Card 5', basis: '30%', color: '#8b5cf6' },
              { title: 'Card 6', basis: '30%', color: '#ec4899' },
            ].map((card, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: card.color,
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  flexBasis: card.basis,
                  flexGrow: 1,
                  flexShrink: 1,
                  minHeight: '80px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div>{card.title}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.25rem' }}>
                  basis: {card.basis}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: '#1e293b',
            color: '#e2e8f0',
            padding: '0.75rem',
            borderRadius: '6px',
            marginTop: '1rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            whiteSpace: 'pre-line',
          }}>
            {`flexDirection: 'row'
flexWrap: 'wrap'
flexBasis: '45%' | '100%' | '30%'
flexGrow: 1, flexShrink: 1`}
          </div>
        </div>

        {/* Info Footer */}
        <div style={{
          backgroundColor: '#f1f5f9',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '1.5rem',
          margin: '2rem 0',
          textAlign: 'center',
        }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e293b', fontSize: '1.125rem' }}>
            🚀 React Native Flexbox Properties
          </h3>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>
            Este app demonstra as principais propriedades do Flexbox usadas no React Native. 
            Redimensione a janela para ver a responsividade em ação!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexboxDemoApp;
