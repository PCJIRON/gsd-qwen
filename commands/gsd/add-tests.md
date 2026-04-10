---
name: gsd:add-tests
description: Add tests to completed work that lacks test coverage
argument-hint: "[phase|file]"
---

# /gsd:add-tests

## Arguments

- `phase` — Phase number to add tests for
- `file` — Specific file to add tests for

## Purpose

Add tests to code that was implemented without tests. Useful for quick mode executions or when tests were skipped.

## What This Creates

- Test files for target code
- Test commit

## Process

1. Determine target:
   - If phase specified: Find all untested files in phase
   - If file specified: Test that file
2. Scan for existing tests:
   - Find test directory
   - Load test patterns and conventions
3. Identify untested code:
   - Compare source files to test files
   - Find functions/components without tests
4. For each untested unit:
   - Understand functionality
   - Identify test cases needed
   - Write tests following existing patterns
5. Create test file:
   ```typescript
   // {file}.test.ts
   import { functionToTest } from './{file}';

   describe('{functionName}', () => {
     it('should {expected behavior}', () => {
       // Arrange
       const input = {...};

       // Act
       const result = functionToTest(input);

       // Assert
       expect(result).toEqual({...});
     });

     it('should handle edge case', () => {
       // Test edge case
     });
   });
   ```
6. Run tests:
   - Execute test suite
   - Verify tests pass
   - Fix any failing tests
7. Create commit: `[GSD] Add tests for {phase|file}`
8. Update coverage report (if exists)
9. Confirm:
   - "Tests added: {count}"
   - "Coverage: {before}% → {after}%"
   - "All tests passing"

## After this command

- Code covered by tests
- Test commit created
- Coverage improved
