### Theory

The slope-deflection method is a classical technique used to analyze indeterminate frames and other structural systems. It's based on the principles of equilibrium and compatibility and is particularly useful for understanding the internal forces and deformations in statically indeterminate structures. In this method, the key idea is to calculate member end moments and joint rotations by considering the slope and deflection of members. Here's an overview of the theory, procedures, and key formulas used in the slope-deflection method for frames:


1. Assumptions:
Elastic Behavior: The materials used in the structure behave elastically, meaning they return to their original shape after deformation.

Small Deformations: The method assumes small deformations and linear-elastic behavior. It is not suitable for structures that undergo large deformations or involve material non-linearity.

Rigid Joints: Joints between members are assumed to be rigid, meaning there is no relative rotation or translation at these connections.

Compatibility of Deformations: The method assumes that the deformations (displacements and rotations) at the ends of each member are compatible with the deformations at the joints.

2. Procedures:

Assigning Unknown Rotations: Assign unknown rotation values (usually symbolized as θ) at the ends of each member. These rotations represent the relative angular displacements between the connected members.

Writing Equilibrium Equations: Write equilibrium equations for each joint, considering the applied loads and the unknown rotations. These equations typically include both moment and shear equations at each joint.

Applying Compatibility Equations: Apply compatibility equations at each joint to relate the rotations to the deformations in the members. The compatibility equations ensure that the deformations are compatible with the rotations at the joints.

Solving for Unknown Rotations: Solve the system of equations that you've developed in steps 2 and 3 to find the unknown rotations. This may require an iterative approach, especially for complex structures, to achieve convergence.

Calculating Member End Moments: With the known rotations, calculate the moments and shears in each member using the slope-deflection equations.

3. Determination of Fixed End Moments (FEM):
   - The first step is to calculate the fixed end moments for each member, which represent the moments that would develop at the ends of the member if it were fully fixed (rotationally and translationally) and subjected to the applied loads.
   - For each member, the fixed end moments are computed using the known loads and the geometry of the beam, taking into account the support conditions at the ends.

   FEM formulas for common support conditions:

Simply Supported Beam with Uniform Load (w) and Length (L):
M1 = M2 = wL²/8

Cantilever Beam with Uniform Load (w) and Length (L):
M1 = M2 = wL²/2

Fixed-Fixed Beam with Uniform Load (w) and Length (L):
M1 = M2 = wL²/12

Fixed-Fixed Beam with Point Load (P) at the Mid-Span:
M1 = M2 = PL/8

4. Formation of Slope-Deflection Equations:
   - The slope-deflection equation relates the rotation (θ) at one end of a member to the lateral displacement (δ) at the same end.
   - These equations are derived based on the relationship between bending moment, curvature, and the material properties of the beam (Elastic Modulus and Moment of Inertia).

   EI * d²θ/dx² = M

where:

M is the bending moment at the considered section of the member.
EI is the flexural rigidity of the member.
θ is the rotation at the considered section.
x is the position along the length of the member.
δ is the sway occured in the frame due to horizontal load.

5. Application of Compatibility Equations:
   - Compatibility conditions are applied to ensure that the rotations and displacements at the common ends of adjacent members are the same.
   - These conditions are essential for ensuring continuity of the beam's deformation.

6. Solving the Simultaneous Equations:
   - The slope-deflection equations and compatibility conditions result in a system of simultaneous equations.
   - These equations are solved to obtain the values of rotations and displacements at each end of the members.

7. Calculation of Bending Moments:
   - Using the computed rotations and displacements, the bending moments at various points along the beam's length can be determined.

   M = EI * d²θ/dx²

where:

M is the bending moment at a specific point along the beam's length.
EI is the flexural rigidity of the beam (product of Young's modulus and moment of inertia).
θ is the rotation (angular displacement) at the point.
x is the position along the beam's length.

8. Verification of Results:
   - The computed bending moments and rotations should satisfy the equilibrium conditions and compatibility equations for the entire structure.

The process is repeated iteratively, refining the results until convergence is achieved. The method becomes more complex for structures with higher degrees of indeterminacy, but it remains an effective technique for analyzing continuous beams and frames.

