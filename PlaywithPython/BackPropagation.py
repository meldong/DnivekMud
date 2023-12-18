"""
################################################################################
Understanding Backpropagation: The Engine Behind Neural Network Learning
################################################################################

https://medium.com/@evertongomede/understanding-backpropagation-the-engine-behind-neural-network-learning-a7c2e1acdbf
"""
import numpy as np

# Sample data
X = np.array([[1, 2], [2, 3], [3, 4]])
y = np.array([1, 0, 1])

# Initialize weights and bias
w = np.random.rand(X.shape[1])
b = np.random.rand()

# Hyperparameters
learning_rate = 0.01
epochs = 100

# Training loop
for epoch in range(epochs):
    for i in range(X.shape[0]):
        # Forward pass
        z = np.dot(X[i], w) + b
        a = 1 / (1 + np.exp(-z))  # Sigmoid activation function

        # Compute the loss (binary cross-entropy in this case)
        loss = -(y[i] * np.log(a) + (1 - y[i]) * np.log(1 - a))

        # Backpropagation
        dz = a - y[i]
        dw = X[i] * dz
        db = dz

        # Update weights and bias
        w -= learning_rate * dw
        b -= learning_rate * db

    # Print loss at the end of each epoch
    print(f'Epoch {epoch + 1}/{epochs}, Loss: {loss:.4f}')

# Print final weights and bias
print(f'Final weights: {w}')
print(f'Final bias: {b}')
