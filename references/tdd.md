# TDD (Test-Driven Development) Reference

## Purpose
Guide for TDD execution within GSD workflow.

---

## TDD Cycle

### 1. Red — Write Failing Test
```typescript
// 1. Write test for desired behavior
it('should {expected behavior}', () => {
  // Arrange
  const input = {...};
  
  // Act
  const result = functionToTest(input);
  
  // Assert
  expect(result).toEqual({...});
});

// 2. Run test - should FAIL
npm test
```

### 2. Green — Make Test Pass
```typescript
// Write minimal code to pass test
function functionToTest(input) {
  return {...}; // Simplest implementation
}

// Run test - should PASS
npm test
```

### 3. Refactor — Improve Code
```typescript
// Improve implementation
// - Remove duplication
// - Improve naming
// - Extract functions
// - Better error handling

// Ensure tests still pass
npm test
```

---

## TDD in GSD

### When to Use TDD

**Use TDD for:**
- Complex business logic
- Algorithm implementation
- Edge case handling
- Regression prevention

**Skip TDD for:**
- Simple CRUD operations
- UI styling
- One-off scripts
- Prototypes

### Task Type

In plans, mark TDD tasks:

```markdown
<task id="1" type="auto" tdd="true">
Implement {functionality}

**Test Cases:**
1. {case 1}
2. {case 2}
3. {edge case}
```

---

## Test Structure

### Arrange-Act-Assert Pattern

```typescript
describe('{functionName}', () => {
  it('should {expected behavior}', () => {
    // Arrange
    const input = {...};
    const expected = {...};
    
    // Act
    const result = functionToTest(input);
    
    // Assert
    expect(result).toEqual(expected);
  });
});
```

### Test Naming

```typescript
// Good: Describes behavior
it('should return user profile when valid id provided')

// Bad: Too vague
it('should work')

// Bad: Implementation detail
it('should call database')
```

---

## Test Categories

### Unit Tests
- Test single function/component
- Mock dependencies
- Fast execution

### Integration Tests
- Test component interactions
- Real dependencies
- Slower but more realistic

### E2E Tests
- Test full user flows
- Real browser/environment
- Slowest but most accurate

---

## Coverage Guidelines

**Target Coverage:**
- Critical logic: 100%
- Business logic: 80%+
- UI components: 60%+
- Simple CRUD: 40%+

**Don't Chase 100%:**
- Focus on valuable tests
- Skip trivial getters/setters
- Skip generated code
