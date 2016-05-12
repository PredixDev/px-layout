# px-responsive-layouts
This repository is a collection of responsive layout patterns using the Predix UI Design System. 

> This project follows the *BEM Frontend Development Methodology*

> For information on BEM visit [https://en.bem.info/](https://en.bem.info/)


## px-layout
The `px-layout` element provides auto-magically handling your applications layout. This enables a single layout will be responsive across all screen sizes and devices.


The structure of content generally follows the following format:


```
Code example
```

The preceeding code example the following is happening:

1. ..
2. ..
3. ..



### Layout Options

1. **type**: progressive, offcanvas, splitview, grid
- **breakpoints**
	 - 330 - xsmall
	 - 460 - small
	 - 768 - medium
	 - 1024 - large
	 - 1200 - large

### 2. Sidebar Options
1. **type**
    - mini
    - temporary
    - persistent
- **position**
    - top (used for alerts and notifications)
    - bottom (used for actions and other content)
    - left (Default - Primary)
    - right (Secondary)
- Secondary sidebar options
    - Position
        - Right
        - Bottom
    - Type
        - Temporary - small
        - Mini - medium
        - Persistent - large


### 3 - Primary Navigation Options
The primary navigation of the application will use the `px-table-view` element and it is up to the developer to choose the best `px-table-row` element to use. 


#### a) Nested Navigation
When you have multiple levels of navigation, sibling views should be nested underneath their parent.
On desktop, a secondary level of navigation may be nested within the navigation drawer.

Appropriate for these hierarchies:

- Lateral navigation
- Parents with siblings or peers

#### b) Expanding navigation drawer
If you have a deep navigational hierarchy, you may expand that hierarchy within the navigation drawer.

- Upon selecting a level,  the level of navigation below is revealed.
- Selecting a collapsed section expands that level in-line, hiding all levels outside of it.

#### c) Cascading navigation drawer (Desktop only)
If you have a deep navigational hierarchy, you may use cascading menus to expand navigation drawer content horizontally.

- Each collection of views is presented in its own panel
- a level closes when a subsection is selected.

###Primary Content Options
- px-view
- etc

###Secondary content






## Breakpoints
The following breakpoints and class naming are as follows:


### Current Breakpoints

Class Name | Min / Max Size (rem) | Min / Max Size (px)
------------ | ------------- | ------------
`.palm` 		| 47.9375  		| 767
`.lap` 		| 48 / 68.20  	| 768 / 1092
`.lap-and-up` | 48  			| 768
`.desk` 		| 68.26  			| 1092
`.desk-wide` | 80 				| 1280




### Standard Breakpoints
The following breakpoints are the so called standard.

- Mobile portrait (320x480) (20em / 30em)
- Mobile landscape (480x320) (30em / 20em) 
- Small tablet portrait (600x800) (37.500em / 50em)
- Small tablet landscape (800x600)
- Tablet portrait (768x1024) (48em / 64em)
- Tablet landscape (1024x768)
- Desktop (1092x800) 68.250em
- Desktop Wide (1280x900) 80em






## Layouts
The following responsive layouts are/should be used for px-* applications targeting cross devices.

