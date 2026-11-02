import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RepositoryModel = runtime.Types.Result.DefaultSelection<Prisma.$RepositoryPayload>;
export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null;
    _min: RepositoryMinAggregateOutputType | null;
    _max: RepositoryMaxAggregateOutputType | null;
};
export type RepositoryMinAggregateOutputType = {
    id: string | null;
    owner: string | null;
    name: string | null;
    fullName: string | null;
    url: string | null;
    defaultBranch: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RepositoryMaxAggregateOutputType = {
    id: string | null;
    owner: string | null;
    name: string | null;
    fullName: string | null;
    url: string | null;
    defaultBranch: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RepositoryCountAggregateOutputType = {
    id: number;
    owner: number;
    name: number;
    fullName: number;
    url: number;
    defaultBranch: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RepositoryMinAggregateInputType = {
    id?: true;
    owner?: true;
    name?: true;
    fullName?: true;
    url?: true;
    defaultBranch?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RepositoryMaxAggregateInputType = {
    id?: true;
    owner?: true;
    name?: true;
    fullName?: true;
    url?: true;
    defaultBranch?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RepositoryCountAggregateInputType = {
    id?: true;
    owner?: true;
    name?: true;
    fullName?: true;
    url?: true;
    defaultBranch?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RepositoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositoryWhereInput;
    orderBy?: Prisma.RepositoryOrderByWithRelationInput | Prisma.RepositoryOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RepositoryCountAggregateInputType;
    _min?: RepositoryMinAggregateInputType;
    _max?: RepositoryMaxAggregateInputType;
};
export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
    [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRepository[P]> : Prisma.GetScalarType<T[P], AggregateRepository[P]>;
};
export type RepositoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositoryWhereInput;
    orderBy?: Prisma.RepositoryOrderByWithAggregationInput | Prisma.RepositoryOrderByWithAggregationInput[];
    by: Prisma.RepositoryScalarFieldEnum[] | Prisma.RepositoryScalarFieldEnum;
    having?: Prisma.RepositoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RepositoryCountAggregateInputType | true;
    _min?: RepositoryMinAggregateInputType;
    _max?: RepositoryMaxAggregateInputType;
};
export type RepositoryGroupByOutputType = {
    id: string;
    owner: string;
    name: string;
    fullName: string;
    url: string;
    defaultBranch: string;
    createdAt: Date;
    updatedAt: Date;
    _count: RepositoryCountAggregateOutputType | null;
    _min: RepositoryMinAggregateOutputType | null;
    _max: RepositoryMaxAggregateOutputType | null;
};
export type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RepositoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RepositoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RepositoryGroupByOutputType[P]>;
}>>;
export type RepositoryWhereInput = {
    AND?: Prisma.RepositoryWhereInput | Prisma.RepositoryWhereInput[];
    OR?: Prisma.RepositoryWhereInput[];
    NOT?: Prisma.RepositoryWhereInput | Prisma.RepositoryWhereInput[];
    id?: Prisma.StringFilter<"Repository"> | string;
    owner?: Prisma.StringFilter<"Repository"> | string;
    name?: Prisma.StringFilter<"Repository"> | string;
    fullName?: Prisma.StringFilter<"Repository"> | string;
    url?: Prisma.StringFilter<"Repository"> | string;
    defaultBranch?: Prisma.StringFilter<"Repository"> | string;
    createdAt?: Prisma.DateTimeFilter<"Repository"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Repository"> | Date | string;
    files?: Prisma.RepositoryFileListRelationFilter;
};
export type RepositoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    files?: Prisma.RepositoryFileOrderByRelationAggregateInput;
};
export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    fullName?: string;
    AND?: Prisma.RepositoryWhereInput | Prisma.RepositoryWhereInput[];
    OR?: Prisma.RepositoryWhereInput[];
    NOT?: Prisma.RepositoryWhereInput | Prisma.RepositoryWhereInput[];
    owner?: Prisma.StringFilter<"Repository"> | string;
    name?: Prisma.StringFilter<"Repository"> | string;
    url?: Prisma.StringFilter<"Repository"> | string;
    defaultBranch?: Prisma.StringFilter<"Repository"> | string;
    createdAt?: Prisma.DateTimeFilter<"Repository"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Repository"> | Date | string;
    files?: Prisma.RepositoryFileListRelationFilter;
}, "id" | "fullName">;
export type RepositoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RepositoryCountOrderByAggregateInput;
    _max?: Prisma.RepositoryMaxOrderByAggregateInput;
    _min?: Prisma.RepositoryMinOrderByAggregateInput;
};
export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.RepositoryScalarWhereWithAggregatesInput | Prisma.RepositoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.RepositoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RepositoryScalarWhereWithAggregatesInput | Prisma.RepositoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Repository"> | string;
    owner?: Prisma.StringWithAggregatesFilter<"Repository"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Repository"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Repository"> | string;
    url?: Prisma.StringWithAggregatesFilter<"Repository"> | string;
    defaultBranch?: Prisma.StringWithAggregatesFilter<"Repository"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Repository"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Repository"> | Date | string;
};
export type RepositoryCreateInput = {
    id?: string;
    owner: string;
    name: string;
    fullName: string;
    url: string;
    defaultBranch: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.RepositoryFileCreateNestedManyWithoutRepositoryInput;
};
export type RepositoryUncheckedCreateInput = {
    id?: string;
    owner: string;
    name: string;
    fullName: string;
    url: string;
    defaultBranch: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.RepositoryFileUncheckedCreateNestedManyWithoutRepositoryInput;
};
export type RepositoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.RepositoryFileUpdateManyWithoutRepositoryNestedInput;
};
export type RepositoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.RepositoryFileUncheckedUpdateManyWithoutRepositoryNestedInput;
};
export type RepositoryCreateManyInput = {
    id?: string;
    owner: string;
    name: string;
    fullName: string;
    url: string;
    defaultBranch: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RepositoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RepositoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RepositoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    owner?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    defaultBranch?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RepositoryScalarRelationFilter = {
    is?: Prisma.RepositoryWhereInput;
    isNot?: Prisma.RepositoryWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type RepositoryCreateNestedOneWithoutFilesInput = {
    create?: Prisma.XOR<Prisma.RepositoryCreateWithoutFilesInput, Prisma.RepositoryUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.RepositoryCreateOrConnectWithoutFilesInput;
    connect?: Prisma.RepositoryWhereUniqueInput;
};
export type RepositoryUpdateOneRequiredWithoutFilesNestedInput = {
    create?: Prisma.XOR<Prisma.RepositoryCreateWithoutFilesInput, Prisma.RepositoryUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.RepositoryCreateOrConnectWithoutFilesInput;
    upsert?: Prisma.RepositoryUpsertWithoutFilesInput;
    connect?: Prisma.RepositoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RepositoryUpdateToOneWithWhereWithoutFilesInput, Prisma.RepositoryUpdateWithoutFilesInput>, Prisma.RepositoryUncheckedUpdateWithoutFilesInput>;
};
export type RepositoryCreateWithoutFilesInput = {
    id?: string;
    owner: string;
    name: string;
    fullName: string;
    url: string;
    defaultBranch: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RepositoryUncheckedCreateWithoutFilesInput = {
    id?: string;
    owner: string;
    name: string;
    fullName: string;
    url: string;
    defaultBranch: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RepositoryCreateOrConnectWithoutFilesInput = {
    where: Prisma.RepositoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositoryCreateWithoutFilesInput, Prisma.RepositoryUncheckedCreateWithoutFilesInput>;
};
export type RepositoryUpsertWithoutFilesInput = {
    update: Prisma.XOR<Prisma.RepositoryUpdateWithoutFilesInput, Prisma.RepositoryUncheckedUpdateWithoutFilesInput>;
    create: Prisma.XOR<Prisma.RepositoryCreateWithoutFilesInput, Prisma.RepositoryUncheckedCreateWithoutFilesInput>;
    where?: Prisma.RepositoryWhereInput;
};
export type RepositoryUpdateToOneWithWhereWithoutFilesInput = {
    where?: Prisma.RepositoryWhereInput;
    data: Prisma.XOR<Prisma.RepositoryUpdateWithoutFilesInput, Prisma.RepositoryUncheckedUpdateWithoutFilesInput>;
};
export type RepositoryUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryUncheckedUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    defaultBranch?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepositoryCountOutputType = {
    files: number;
};
export type RepositoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    files?: boolean | RepositoryCountOutputTypeCountFilesArgs;
};
export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryCountOutputTypeSelect<ExtArgs> | null;
};
export type RepositoryCountOutputTypeCountFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositoryFileWhereInput;
};
export type RepositorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    owner?: boolean;
    name?: boolean;
    fullName?: boolean;
    url?: boolean;
    defaultBranch?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    files?: boolean | Prisma.Repository$filesArgs<ExtArgs>;
    _count?: boolean | Prisma.RepositoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["repository"]>;
export type RepositorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    owner?: boolean;
    name?: boolean;
    fullName?: boolean;
    url?: boolean;
    defaultBranch?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["repository"]>;
export type RepositorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    owner?: boolean;
    name?: boolean;
    fullName?: boolean;
    url?: boolean;
    defaultBranch?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["repository"]>;
export type RepositorySelectScalar = {
    id?: boolean;
    owner?: boolean;
    name?: boolean;
    fullName?: boolean;
    url?: boolean;
    defaultBranch?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RepositoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "owner" | "name" | "fullName" | "url" | "defaultBranch" | "createdAt" | "updatedAt", ExtArgs["result"]["repository"]>;
export type RepositoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    files?: boolean | Prisma.Repository$filesArgs<ExtArgs>;
    _count?: boolean | Prisma.RepositoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RepositoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RepositoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Repository";
    objects: {
        files: Prisma.$RepositoryFilePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        owner: string;
        name: string;
        fullName: string;
        url: string;
        defaultBranch: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["repository"]>;
    composites: {};
};
export type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RepositoryPayload, S>;
export type RepositoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RepositoryCountAggregateInputType | true;
};
export interface RepositoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Repository'];
        meta: {
            name: 'Repository';
        };
    };
    findUnique<T extends RepositoryFindUniqueArgs>(args: Prisma.SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RepositoryFindFirstArgs>(args?: Prisma.SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RepositoryFindManyArgs>(args?: Prisma.SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RepositoryCreateArgs>(args: Prisma.SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RepositoryCreateManyArgs>(args?: Prisma.SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RepositoryDeleteArgs>(args: Prisma.SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RepositoryUpdateArgs>(args: Prisma.SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RepositoryUpdateManyArgs>(args: Prisma.SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RepositoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RepositoryUpsertArgs>(args: Prisma.SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma.Prisma__RepositoryClient<runtime.Types.Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RepositoryCountArgs>(args?: Prisma.Subset<T, RepositoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RepositoryCountAggregateOutputType> : number>;
    aggregate<T extends RepositoryAggregateArgs>(args: Prisma.Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>;
    groupBy<T extends RepositoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RepositoryGroupByArgs['orderBy'];
    } : {
        orderBy?: RepositoryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RepositoryFieldRefs;
}
export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    files<T extends Prisma.Repository$filesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Repository$filesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RepositoryFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RepositoryFieldRefs {
    readonly id: Prisma.FieldRef<"Repository", 'String'>;
    readonly owner: Prisma.FieldRef<"Repository", 'String'>;
    readonly name: Prisma.FieldRef<"Repository", 'String'>;
    readonly fullName: Prisma.FieldRef<"Repository", 'String'>;
    readonly url: Prisma.FieldRef<"Repository", 'String'>;
    readonly defaultBranch: Prisma.FieldRef<"Repository", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Repository", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Repository", 'DateTime'>;
}
export type RepositoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    where: Prisma.RepositoryWhereUniqueInput;
};
export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    where: Prisma.RepositoryWhereUniqueInput;
};
export type RepositoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    where?: Prisma.RepositoryWhereInput;
    orderBy?: Prisma.RepositoryOrderByWithRelationInput | Prisma.RepositoryOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositoryScalarFieldEnum | Prisma.RepositoryScalarFieldEnum[];
};
export type RepositoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    where?: Prisma.RepositoryWhereInput;
    orderBy?: Prisma.RepositoryOrderByWithRelationInput | Prisma.RepositoryOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositoryScalarFieldEnum | Prisma.RepositoryScalarFieldEnum[];
};
export type RepositoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    where?: Prisma.RepositoryWhereInput;
    orderBy?: Prisma.RepositoryOrderByWithRelationInput | Prisma.RepositoryOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositoryScalarFieldEnum | Prisma.RepositoryScalarFieldEnum[];
};
export type RepositoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositoryCreateInput, Prisma.RepositoryUncheckedCreateInput>;
};
export type RepositoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RepositoryCreateManyInput | Prisma.RepositoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RepositoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    data: Prisma.RepositoryCreateManyInput | Prisma.RepositoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RepositoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositoryUpdateInput, Prisma.RepositoryUncheckedUpdateInput>;
    where: Prisma.RepositoryWhereUniqueInput;
};
export type RepositoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RepositoryUpdateManyMutationInput, Prisma.RepositoryUncheckedUpdateManyInput>;
    where?: Prisma.RepositoryWhereInput;
    limit?: number;
};
export type RepositoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RepositoryUpdateManyMutationInput, Prisma.RepositoryUncheckedUpdateManyInput>;
    where?: Prisma.RepositoryWhereInput;
    limit?: number;
};
export type RepositoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    where: Prisma.RepositoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RepositoryCreateInput, Prisma.RepositoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RepositoryUpdateInput, Prisma.RepositoryUncheckedUpdateInput>;
};
export type RepositoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
    where: Prisma.RepositoryWhereUniqueInput;
};
export type RepositoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RepositoryWhereInput;
    limit?: number;
};
export type Repository$filesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositoryFileSelect<ExtArgs> | null;
    omit?: Prisma.RepositoryFileOmit<ExtArgs> | null;
    include?: Prisma.RepositoryFileInclude<ExtArgs> | null;
    where?: Prisma.RepositoryFileWhereInput;
    orderBy?: Prisma.RepositoryFileOrderByWithRelationInput | Prisma.RepositoryFileOrderByWithRelationInput[];
    cursor?: Prisma.RepositoryFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepositoryFileScalarFieldEnum | Prisma.RepositoryFileScalarFieldEnum[];
};
export type RepositoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RepositorySelect<ExtArgs> | null;
    omit?: Prisma.RepositoryOmit<ExtArgs> | null;
    include?: Prisma.RepositoryInclude<ExtArgs> | null;
};
