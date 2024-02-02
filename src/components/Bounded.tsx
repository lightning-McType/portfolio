import { forwardRef } from 'react';
import clsx from 'clsx';

type BoundedProps = {
	as?: React.ElementType;
	className?: string;
	children: React.ReactNode;
};

const Bounded = forwardRef<HTMLDivElement, BoundedProps>(({ as: Comp = 'section', className, children, ...restProps }, ref) => {
	return (
		<Comp
			ref={ref}
			className={clsx('px-4 py-10 md:px-5 md:py-12 lg:py-14', className)}
			{...restProps}>
			<div className="mx-auto w-full max-w-[87rem]">{children}</div>
		</Comp>
	);
});

Bounded.displayName = 'Bounded';

export default Bounded;
