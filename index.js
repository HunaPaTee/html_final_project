function upDate(previewPic) {
            // Log to console for debugging (as recommended in instructions)
            console.log('Mouse over event triggered');
            console.log('Preview pic element:', previewPic);
            console.log('Alt text:', previewPic.dataset.alt);
            console.log('Source:', previewPic.dataset.src);
            
            // Get the preview image element
            const imageElement = document.getElementById('image');
            
            // Get the preview text element
            const textElement = document.getElementById('image-text');
            
            // Update the preview image source
            imageElement.src = previewPic.dataset.src;
            imageElement.alt = previewPic.dataset.alt;
            
            // Update the preview text
            textElement.textContent = previewPic.dataset.alt;
            
            // Add some visual feedback
            imageElement.style.transform = 'scale(1.05)';
            
            console.log('Image and text updated successfully');
        }
        
        // Function to handle mouse out event (undo function)
        function unDo() {
            console.log('Mouse out event triggered - returning to default');
            
            // Get the preview image element
            const imageElement = document.getElementById('image');
            
            // Get the preview text element  
            const textElement = document.getElementById('image-text');
            
            // Reset to original values
            imageElement.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop';
            imageElement.alt = 'Default preview';
            
            // Reset the text
            textElement.textContent = 'Hover over an image above to display here.';
            
            // Reset visual effects
            imageElement.style.transform = 'scale(1)';
            
            console.log('Reset to default state complete');
        }
        
        // Add some additional interactivity
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Interactive Photo Gallery loaded successfully');
            console.log('Open the browser console to see event logging');
        });