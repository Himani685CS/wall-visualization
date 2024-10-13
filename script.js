function generateBars() {
    const wallCount = parseInt(document.getElementById('wallCountInput').value);
    const heightsInput = document.getElementById('heightsInput').value;
    const heights = heightsInput.split('#').map(Number); // Convert input to an array of numbers

    if (heights.length !== wallCount) {
      alert('The number of walls and the number of heights do not match!');
      return;
    }

    const barsContainer = document.getElementById('bars');
    barsContainer.innerHTML = ''; // Clear previous bars

    let visibleLeft = 0;
    let visibleRight = 0;

    // Show the container with circles after submit
    document.getElementById('container').style.visibility = 'visible';

    // Create bars dynamically based on heights array
    heights.forEach((height) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${height * 30}px`; // Adjust bar height scaling
      bar.innerHTML = `<span>${height}</span>`;
      barsContainer.appendChild(bar);
    });

    // Calculate visible walls from the left
    let maxLeft = 0;
    heights.forEach((height) => {
      if (height > maxLeft) {
        visibleLeft++;
        maxLeft = height;
      }
    });

    // Calculate visible walls from the right
    let maxRight = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
      if (heights[i] > maxRight) {
        visibleRight++;
        maxRight = heights[i];
      }
    }

    // Update circles with the visible wall count
    document.getElementById('leftVisible').innerText = visibleLeft;
    document.getElementById('rightVisible').innerText = visibleRight;

    // Display results in the footer
    document.getElementById('footer').innerText =
      `Walls Visible from person on Right = ${visibleRight}, Walls visible from Left = ${visibleLeft}`;
  }