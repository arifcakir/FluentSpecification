
var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"MaxLengthSpecification",
            content:"MaxLengthSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/MaxLengthSpecification_1',
            title:"MaxLengthSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"ILinqSpecification",
            content:"ILinqSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions/ILinqSpecification',
            title:"ILinqSpecification",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"LessThanOrEqualSpecification",
            content:"LessThanOrEqualSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/LessThanOrEqualSpecification_1',
            title:"LessThanOrEqualSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"InclusiveBetweenSpecification",
            content:"InclusiveBetweenSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/InclusiveBetweenSpecification_1',
            title:"InclusiveBetweenSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"AndSpecification",
            content:"AndSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Composite/AndSpecification_1',
            title:"AndSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"BaseBetweenSpecification",
            content:"BaseBetweenSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common.Abstractions/BaseBetweenSpecification_1',
            title:"BaseBetweenSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"SpecificationResult",
            content:"SpecificationResult",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Validation/SpecificationResult',
            title:"SpecificationResult",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"ISpecification",
            content:"ISpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/ISpecification_1',
            title:"ISpecification<T>",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"Specification",
            content:"Specification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core/Specification',
            title:"Specification",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"LengthSpecification",
            content:"LengthSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/LengthSpecification_1',
            title:"LengthSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"CreditCardSpecification",
            content:"CreditCardSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/CreditCardSpecification',
            title:"CreditCardSpecification",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"IComplexSpecification",
            content:"IComplexSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/IComplexSpecification_1',
            title:"IComplexSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"ContainsSpecification",
            content:"ContainsSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/ContainsSpecification',
            title:"ContainsSpecification",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"INegatableLinqSpecification",
            content:"INegatableLinqSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/INegatableLinqSpecification_1',
            title:"INegatableLinqSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"EmptySpecification",
            content:"EmptySpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/EmptySpecification_1',
            title:"EmptySpecification<T>",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"CompositeSpecification",
            content:"CompositeSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Composite/CompositeSpecification_1',
            title:"CompositeSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"NullSpecification",
            content:"NullSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/NullSpecification_1',
            title:"NullSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"ContainsSpecification",
            content:"ContainsSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/ContainsSpecification_2',
            title:"ContainsSpecification<T, TType>",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"GreaterThanOrEqualSpecification",
            content:"GreaterThanOrEqualSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/GreaterThanOrEqualSpecification_1',
            title:"GreaterThanOrEqualSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"FailedSpecification",
            content:"FailedSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Validation/FailedSpecification',
            title:"FailedSpecification",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"AllSpecification",
            content:"AllSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/AllSpecification_2',
            title:"AllSpecification<T, TType>",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"AnySpecification",
            content:"AnySpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/AnySpecification_2',
            title:"AnySpecification<T, TType>",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"INegatableSpecification",
            content:"INegatableSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/INegatableSpecification_1',
            title:"INegatableSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"ExpressionSpecification",
            content:"ExpressionSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/ExpressionSpecification_1',
            title:"ExpressionSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"LengthBetweenSpecification",
            content:"LengthBetweenSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/LengthBetweenSpecification_1',
            title:"LengthBetweenSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"ComplexSpecification",
            content:"ComplexSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core/ComplexSpecification_1',
            title:"ComplexSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"ISpecification",
            content:"ISpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions/ISpecification',
            title:"ISpecification",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"EmailSpecification",
            content:"EmailSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/EmailSpecification',
            title:"EmailSpecification",
            description:""
        }
    );
    a(
        {
            id:28,
            title:"BaseGreaterCompareSpecification",
            content:"BaseGreaterCompareSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common.Abstractions/BaseGreaterCompareSpecification_1',
            title:"BaseGreaterCompareSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:29,
            title:"BaseCompareSpecification",
            content:"BaseCompareSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common.Abstractions/BaseCompareSpecification_1',
            title:"BaseCompareSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:30,
            title:"BaseCollectionSpecification",
            content:"BaseCollectionSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common.Abstractions/BaseCollectionSpecification_2',
            title:"BaseCollectionSpecification<T, TType>",
            description:""
        }
    );
    a(
        {
            id:31,
            title:"ICompositeSpecification",
            content:"ICompositeSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/ICompositeSpecification_1',
            title:"ICompositeSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:32,
            title:"IsTypeSpecification",
            content:"IsTypeSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/IsTypeSpecification_1',
            title:"IsTypeSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:33,
            title:"LessThanSpecification",
            content:"LessThanSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/LessThanSpecification_1',
            title:"LessThanSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:34,
            title:"PropertySpecification",
            content:"PropertySpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Composite/PropertySpecification_2',
            title:"PropertySpecification<T, TProperty>",
            description:""
        }
    );
    a(
        {
            id:35,
            title:"BaseLessCompareSpecification",
            content:"BaseLessCompareSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common.Abstractions/BaseLessCompareSpecification_1',
            title:"BaseLessCompareSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:36,
            title:"Specification",
            content:"Specification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification/Specification',
            title:"Specification",
            description:""
        }
    );
    a(
        {
            id:37,
            title:"BaseLengthSpecification",
            content:"BaseLengthSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common.Abstractions/BaseLengthSpecification_1',
            title:"BaseLengthSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:38,
            title:"CastSpecification",
            content:"CastSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Composite/CastSpecification_2',
            title:"CastSpecification<T, TCast>",
            description:""
        }
    );
    a(
        {
            id:39,
            title:"IValidationSpecification",
            content:"IValidationSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/IValidationSpecification_1',
            title:"IValidationSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:40,
            title:"TraceMessageModifier",
            content:"TraceMessageModifier",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Validation/TraceMessageModifier',
            title:"TraceMessageModifier",
            description:""
        }
    );
    a(
        {
            id:41,
            title:"NegatableValidationSpecification",
            content:"NegatableValidationSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core/NegatableValidationSpecification_1',
            title:"NegatableValidationSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:42,
            title:"FalseSpecification",
            content:"FalseSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/FalseSpecification',
            title:"FalseSpecification",
            description:""
        }
    );
    a(
        {
            id:43,
            title:"ExclusiveBetweenSpecification",
            content:"ExclusiveBetweenSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/ExclusiveBetweenSpecification_1',
            title:"ExclusiveBetweenSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:44,
            title:"NotSpecification",
            content:"NotSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Composite/NotSpecification_1',
            title:"NotSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:45,
            title:"EqualSpecification",
            content:"EqualSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/EqualSpecification_1',
            title:"EqualSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:46,
            title:"OrSpecification",
            content:"OrSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Composite/OrSpecification_1',
            title:"OrSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:47,
            title:"ILinqSpecification",
            content:"ILinqSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/ILinqSpecification_1',
            title:"ILinqSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:48,
            title:"ValidationSpecification",
            content:"ValidationSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core/ValidationSpecification_1',
            title:"ValidationSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:49,
            title:"GreaterThanSpecification",
            content:"GreaterThanSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/GreaterThanSpecification_1',
            title:"GreaterThanSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:50,
            title:"INegatableValidationSpecification",
            content:"INegatableValidationSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Abstractions.Generic/INegatableValidationSpecification_1',
            title:"INegatableValidationSpecification<T>",
            description:""
        }
    );
    a(
        {
            id:51,
            title:"SpecificationResultGenerator",
            content:"SpecificationResultGenerator",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Validation/SpecificationResultGenerator',
            title:"SpecificationResultGenerator",
            description:""
        }
    );
    a(
        {
            id:52,
            title:"TrueSpecification",
            content:"TrueSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/TrueSpecification',
            title:"TrueSpecification",
            description:""
        }
    );
    a(
        {
            id:53,
            title:"MatchSpecification",
            content:"MatchSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/MatchSpecification',
            title:"MatchSpecification",
            description:""
        }
    );
    a(
        {
            id:54,
            title:"TypeExtensions",
            content:"TypeExtensions",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Utils/TypeExtensions',
            title:"TypeExtensions",
            description:""
        }
    );
    a(
        {
            id:55,
            title:"ExpressionParameterRebinder",
            content:"ExpressionParameterRebinder",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Core.Utils/ExpressionParameterRebinder',
            title:"ExpressionParameterRebinder",
            description:""
        }
    );
    a(
        {
            id:56,
            title:"MinLengthSpecification",
            content:"MinLengthSpecification",
            description:'',
            tags:''
        },
        {
            url:'/FluentSpecification/api/FluentSpecification.Common/MinLengthSpecification_1',
            title:"MinLengthSpecification<T>",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
